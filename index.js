const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('欢迎使用微信云托管！')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})

app.post('/getMessage', (req, res) => {
  const resModal = {
    ToUserName: req.body.ToUserName,
    FromUserName: req.body.FromUserName,
    CreateTime: new Date().getTime(),
    MsgType: 'text',
    Content: '111'
  }
  res.send(resModal)
})
