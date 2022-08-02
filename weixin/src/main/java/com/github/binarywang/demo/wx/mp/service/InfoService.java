package com.github.binarywang.demo.wx.mp.service;

import com.github.binarywang.demo.wx.mp.mapper.InfoMapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import me.chanjar.weixin.mp.bean.message.WxMpXmlMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Gang Zhao
 * @Description
 * @date 2022/6/2 16:07
 */
@Service
public class InfoService {

    @Autowired
    private InfoMapper infoMapper;

    public String processUser(WxMpXmlMessage wxMessage){
        String content = wxMessage.getContent();
        String[] contentArray = content.replace("{", "").replace("}", "").split("-");
        if(contentArray.length == 2) {
            Map<String, Object> infoMap = new HashMap<>();
            infoMap.put("fromUser", wxMessage.getFromUser());
            infoMap.put("toUser", wxMessage.getToUser());
            infoMap.put("userName", contentArray[0]);
            infoMap.put("jobNumber", contentArray[1]);
            infoMap.put("createTime", wxMessage.getCreateTime());
            List<Map<String, Object>> userInfoList = infoMapper.queryUserInfo(infoMap);
            if(null != userInfoList && userInfoList.size() > 0){
                return "账号已注册";
            }
            int num = infoMapper.insertUserInfo(infoMap);
            if(num == 1) {
                return "账号注册成功";
            }else{
                return "账号注册失败";
            }
        }
        return "账号格式错误";
    }

    public String processImage(WxMpXmlMessage wxMessage){
        Map<String, Object> infoMap = new HashMap<>();
        infoMap.put("fromUser", wxMessage.getFromUser());
        infoMap.put("toUser", wxMessage.getToUser());
        infoMap.put("picUrl", wxMessage.getPicUrl());
        infoMap.put("createTime", wxMessage.getCreateTime());
        List<Map<String, Object>> userInfoList = infoMapper.queryUserInfo(infoMap);
        if(null != userInfoList && userInfoList.size() > 0){
            int num = infoMapper.insertImageInfo(infoMap);
            if(num == 1) {
                return "图片上传成功";
            }else{
                return "图片上传失败";
            }
        }
        return "账号未注册";
    }
}
