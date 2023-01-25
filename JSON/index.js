const fs = require('fs');
const bioData = {
    name: "Shruti",
    age: "20",
};

const jsondata = JSON.stringify(bioData);//Convert object to json
console.log(jsondata);

const normaldata = JSON.parse(jsondata); //Convert JSON to object
console.log(normaldata);


fs.writeFile('data.json', jsondata, ()=>{
    console.log("Done");
});

fs.readFile('data.json', 'utf-8', (err, data)=>{
    const obj = JSON.parse(data);
    console.log(obj);
});