// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入mysql操作模块
const mysql = require('mysql2/promise')
// 云函数入口函数
exports.main = async (event, context) => {
  //链接mysql数据库的test库，这里你可以链接你mysql中的任意库
  const datetimes = event.datetimes;
  const stuid = event.stuid;
  try {
    const connection = await mysql.createConnection({
    
        host: "127.0.0.1",
        port:"3306",
        database: "niceschool",
        user: "root",
        password: "root"
    })
    const [rows, fields] = await
      connection.execute('select  a.normalexam, a.testexam, a.sumexam, e.cname, e.ccredit, f.ctname from stu_exam a,' +
        '(select sid from student where stuid = '+stuid+') b,' +
        '(select * from stu_course where sid = (select sid from student where stuid = ' + stuid +')) d,' +
        '(select * from course where cid in (select g.cid from (select * from stu_course GROUP BY scid)g where g.sid = (select sid from student where stuid = ' + stuid +'))) e,course_type f where b.sid = d.sid  && a.scid = d.scid && e.cid = d.cid && e.ctid = f.ctid && a.stime =' + datetimes + ';')
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