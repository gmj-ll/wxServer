const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('欢迎使用微信云托管！')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})

app.post('/getMessage', (req, res) => {
  console.log(req.body)
  const resModal = `<xml>
  <ToUserName><![CDATA[toUser]]></ToUserName>
  <FromUserName><![CDATA[fromUser]]></FromUserName>
  <CreateTime>12345678</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[你好]]></Content>
</xml>`
  res.send(resModal)
})
