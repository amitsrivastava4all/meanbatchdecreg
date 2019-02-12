const events = require("events");
var myEvent = new events.EventEmitter();
myEvent.on('location',(cord)=>{
    console.log('Pick the Call',cord.lat,cord.lng);
});
myEvent.emit('location',{lat:10,lng:20});
