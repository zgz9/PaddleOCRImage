package com.github.binarywang.demo.wx.mp.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author Gang Zhao
 * @Description
 * @date 2022/6/2 16:15
 */
@Mapper
public interface InfoMapper {

    /**
     * 插入用户信息
     */
    int insertUserInfo(Map<String, Object> infoMap);

    List<Map<String, Object>> queryUserInfo(Map<String, Object> infoMap);

    /**
     * 插入图片信息
     */
    int insertImageInfo(Map<String, Object> infoMap);


}
