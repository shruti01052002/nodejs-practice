const express = require('express');
const path = require('path');
const app = express();


//We have to give absolute path  C:\Users\shruti\Desktop\Nodejstut\nodejs-practice\ExpressJs\public
console.log(__dirname);
console.log(path.join(__dirname, ".."));
console.log(path.join(__dirname, "../public"));

// To Set the View Engine
app.set('view engine', "hbs");

// Template Engine Route
app.get('/hbsusage', (req, res)=>{
    res.render('index');
});
//builtin middleware
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
//app.get(route, callback)
app.get('/', (req, res)=>{
    res.send("<h1>Hello I am learning Express js</h1>");
    //res.write()  for multiples responses
    //don't forget to add res.send() for closing the connection
});
app.get('/about', (req, res)=>{
    res.send("Hello I am from About Page");
    res.status(200).send("Hello I am from About Page");
});
// app.get('/temp', (req, res)=>{
//     res.send({
//         id:1,
//         name:"shruti"
//     });
// });
app.get('/temp', (req, res)=>{
    res.json(
        [
            {
                id:1,
                name:"shruti"
            },
            {
                id:1,
                name:"shruti"
            },
            {
                id:1,
                name:"shruti"
            }
        ]
    );
});

app.listen(8000, ()=>{
    console.log("Working fine");
});