import mongoose from "mongoose";

const connection=(async(User,Password)=>{
    const URL=`mongodb+srv://${User}:${Password}@cluster0.5tcyjvv.mongodb.net/`
    try{
        await mongoose.connect(URL)
        console.log("Database Connected");
    }
    catch(err){
        console.log(err)}
        

})

export default connection;
