const mongoose= require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/smiteshop';
const mongoDB = async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
    console.log('connected');
      // const fetched_data = await mongoose.connection.db.collection("smithitems");
      // fetched_data.find({}).toArray(function(err, data){
      //   if(err) console.log(err);
      //   else console.log(data);
      // })
  });
}

  module.exports=mongoDB;
