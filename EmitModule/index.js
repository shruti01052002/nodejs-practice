const EventEmitter = require('events');

const event = new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("Your Name is Shruti");
});
event.on("sayMyName", ()=>{
    console.log("Your Name is Yadav");
});
event.on("sayMyName", ()=>{
    console.log("Your Name is Shreya");
});
event.on("checkPage", (sc, msg)=>{
    console.log(`Status Code is ${sc} and Page is ${msg}`);
});

event.emit("sayMyName");
event.emit("checkPage", 200, "ok");