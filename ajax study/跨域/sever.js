const express=require('express')
const app=express()
app.all('/home',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.sendFile(__dirname+'/index.html')
})
app.all('/data',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('dashdalkj')
})
app.all('/json',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    const data={
        name:'wyw',
        msg:'已经存在'
    }
    res.end(`handle(${JSON.stringify(data)})`)
})
app.all('/jquery-json',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    const data={
        name:'dawjkd',
        loca:'henau'
    }
    let str=JSON.stringify(data)
    let cd=req.query.callback
    res.end(`${cd}(${str})`)
})
app.listen(9000,()=>{
    console.log('服务已经启动'); 
})
