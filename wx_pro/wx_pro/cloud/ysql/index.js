// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入mysql操作模块
const mysql = require('mysql2/promise')
// 云函数入口函数
exports.main = async (event, context) => {
  //链接mysql数据库的test库，这里你可以链接你mysql中的任意库
  const sno = event.usersd
  const spassword = event.pass
  try {
    const connection = await mysql.createConnection({
      
      host: "127.0.0.1",
      port:"3306",
      database: "niceschool",
      user: "root",
      password: "root"
    })
    const [rows, fields] = await
    connection.execute('SELECT COUNT(*) num FROM student WHERE stuid =' + sno + '&& mim=' + spassword + ';')
    return rows;
  } catch (err) {
    console.log("链接错误", err)
    return err
  }
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}