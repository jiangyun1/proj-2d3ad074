package com.nsapi.niceschoolapi;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.nsapi.niceschoolapi.common.util.ResponseEntity;
import com.nsapi.niceschoolapi.entity.Menu;
import com.nsapi.niceschoolapi.service.MenuService;
import net.minidev.json.JSONUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
public class NiceschoolapiApplicationTests {

    @Autowired
    MenuService menuService;

    @Test
    public void contextLoads() {
        QueryWrapper<Menu> wrapper = new QueryWrapper<>();
        Object o = menuService.getObj(wrapper.select("max(sort) as sort").isNull("parent_id"));
        System.out.println(o.toString());

    }
    public void contextLoadscoll() {
     String url= "http://127.0.0.1:8080/addStudent";
     try {
         Map<String, Object> map = new HashMap<>();
         map.put("name", "张三");
         map.put("age", 12);
         map.put("sex", "男");
//         String param= JSONUtil.toJSONString(map);
//         ResponseEntity responseEntity = HttpClientUtil.post(url, param);
     }catch (Exception e) {
         e.printStackTrace();
     }

    }

    public static void main(String[] args) throws ParseException {
        String strDate = "2018-07-18T08:12:08.000+0000";
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'+0000'");
        Date date = format.parse(strDate);
        System.out.println(date.toString());
    }

}
