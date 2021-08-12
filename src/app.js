const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
const host =process.env.host || "127.0.0.1";
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));
//ROUTING
app.get("/",(req,res)=>{
    res.render("index",{
        homeActive:"active"
    });
});
app.get("/about",(req,res)=>{
    res.render("about",{
        aboutActive:"active"
    });
});
app.get("/about/*",(req,res)=>{
    res.render("404 ERROR page");
});
app.get("/weather",(req,res)=>{
    var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
    const date=new Date();
let day = weekday[date.getDay()];
let time=date.getDate();
let m = month[date.getMonth()];

    res.render("weather",{
        day,time,m,
        weatherActive:"active"
    });
});
app.get("/weather/*",(req,res)=>{
    res.render("404 ERROR page");
});
app.get("*",(req,res)=>{
    res.render("404 ERROR page");
});
app.listen(port,host,()=>{
    console.log(`Server is running at Port:${port}`);
});