package com.github.binarywang.demo.wx.mp.handler;

import com.github.binarywang.demo.wx.mp.builder.TextBuilder;
import com.github.binarywang.demo.wx.mp.service.InfoService;
import com.github.binarywang.demo.wx.mp.utils.JsonUtils;
import me.chanjar.weixin.common.error.WxErrorException;
import me.chanjar.weixin.common.session.WxSessionManager;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.bean.message.WxMpXmlMessage;
import me.chanjar.weixin.mp.bean.message.WxMpXmlOutMessage;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

import static me.chanjar.weixin.common.api.WxConsts.XmlMsgType;

/**
 * @author <a href="https://github.com/binarywang">Binary Wang</a>
 */
@Component
public class MsgHandler extends AbstractHandler {

    @Autowired
    private InfoService infoService;

    @Override
    public WxMpXmlOutMessage handle(WxMpXmlMessage wxMessage,
                                    Map<String, Object> context, WxMpService weixinService,
                                    WxSessionManager sessionManager) {
        String result = "";
        if (!wxMessage.getMsgType().equals(XmlMsgType.EVENT)) {
            //TODO 可以选择将消息保存到本地
            if("text".equals(wxMessage.getMsgType())){
                if(wxMessage.getContent().startsWith("{") && wxMessage.getContent().contains("-")
                    && wxMessage.getContent().endsWith("}")) {
                    result = infoService.processUser(wxMessage);
                }else{
                    result = "请按照{姓名-工号}的格式回复消息，注册用户！";
                }
            }else if("image".equals(wxMessage.getMsgType())){
                result = infoService.processImage(wxMessage);
            }
        }

        //当用户输入关键词如“你好”，“客服”等，并且有客服在线时，把消息转发给在线客服
        try {
            if (StringUtils.startsWithAny(wxMessage.getContent(), "你好", "客服")
                && weixinService.getKefuService().kfOnlineList()
                .getKfOnlineList().size() > 0) {
                return WxMpXmlOutMessage.TRANSFER_CUSTOMER_SERVICE()
                    .fromUser(wxMessage.getToUser())
                    .toUser(wxMessage.getFromUser()).build();
            }
        } catch (WxErrorException e) {
            e.printStackTrace();
        }

        //TODO 组装回复消息
        //String content = "收到信息内容：" + JsonUtils.toJson(wxMessage);
        String content = "收到信息内容：" + result;

        return new TextBuilder().build(content, wxMessage, weixinService);

    }

}
