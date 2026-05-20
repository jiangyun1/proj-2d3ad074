// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let stuid = event.stuid;
  
  let tec=event.tec;
  
   
  try {
    const connection = await mysql.createConnection({
     
        host: "127.0.0.1",
        port:"3306",
        database: "niceschool",
        user: "root",
        password: "root"
    })
    const [rows, fields] =
      await connection.execute
        ('select * from evaluate_record where stuid=' + stuid + ' && tchid ='+tec+';')

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