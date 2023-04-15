const express=require('express');
const app=express();
if(process.env.NODE_ENV!=='production')
{
    require('dotenv').config();
}
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index");
})
const port=process.env.PORT;
app.listen(port,()=>{
    console.log('server started');
})