const mongoose= require('mongoose')



const dbConnetion=async ()=>{
    try {
       await mongoose.connect(process.env.CNN,{
           useNewUrlParser:true,
           useUnifiedTopology:true,
        //    useCreateIndex:true,
        //    useFindAndModify:false
       })
       console.log("base de  datos conectada");

    } catch (error) {
        throw new Error("Error al conectar la base de datos")
    }


}

module.exports={
    dbConnetion
}