const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanterlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err) =>{ console.log(err);
});

async function main(){
  await mongoose.connect(MONGO_URL);
};

const initdb = async ()=>{ 
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj,owner: "65f429992a9d4f923ea45427"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};
initdb();