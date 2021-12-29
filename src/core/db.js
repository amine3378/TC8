import mongoose from 'mongoose';

const username="samytadashi";
const password="samytadashi";
const dbURl=`mongodb+srv://${username}:${password}@cluster0.4a0nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


mongoose.connect(dbURl);
//on a 3 status de connexion
mongoose.connection.on("connected",() => {
    console.log("Connected to MongoDb");
});

mongoose.connection.on("error",err=>console.log("Connection error"+err.message));
mongoose.connection.on("disconnected",()=> console.log("Connection disconnected"));
//on arrête la connexion de mongodb quand on arrête le serveur
process.on("SIGINT",()=>{
    mongoose.connection.close(()=> {
        console.log("Connection stopped");
        process.exit(0);
    });
});