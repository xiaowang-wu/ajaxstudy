// const { response } = require('express')
const express = require('express')
const app = express()
const port = 8000

app.get('/sever', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('Hello World! get')
})
app.all('/axios', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('Hello World! axios')
})
app.all('/jquery-sever', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    const data={
        name:'wyw'
    }
    res.send(JSON.stringify(data))
})
app.get('/ie', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('Hello World! ie3')
})
app.get('/deplay', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        res.send('Hello World! internet deplay')
    },500)
    })
    
app.all('/json-sever', (req, res) => 
{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Header','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    //响应一个数据
    const data={
        name:'wyw1'
    }
    
//转换
    res.send(JSON.stringify(data))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
