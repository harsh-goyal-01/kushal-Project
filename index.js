const express=require('express');
const app=express();
if(process.env.NODE_ENV!=='production')
{
    require('dotenv').config();
}
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    res.render("index");
})
app.get('/products',(req,res)=>{
    res.render("products");
})
app.get('/about',(req,res)=>{
    res.render("about");
});
const port=process.env.PORT;
app.listen(port,()=>{
    console.log('server started');
})
