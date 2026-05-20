// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let classid=event.classid;
  let sid = event.sid;
  try {
    const connection = await mysql.createConnection({
        host: "127.0.0.1",
        port:"3306",
        database: "niceschool",
        user: "root",
        password: "root"
    })

    const [rows, fields] = await connection.execute
      ('select DISTINCT c.cname,c.cperiod,c.ccredit,c.studytype,tc.wid,tc.schid from course c,stu_course sc,tch_course tc where          sc.sid=' + sid +' and c.cid=sc.cid and  tc.tcid=c.cid; ')
      
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}