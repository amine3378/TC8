import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import "./core/db.js";
//on a créé un serveur dans ce programme
const app = express();
const port = 3000;
app.use(helmet());
//yarn ngeriw bih packages ta3 projet ta3na
//yarn add nom_package

//req = request, res = response/result
// request ji fel path '/' w tkoun http alors réponse ta3ha daymen hello world, app.get dir l'orientation
// w l'aiguillage ta3 les requêtes li yjouha 
app.get('/',(req,res)=> {
    res.send("Hello world!");
});

//const router = express.Router();

app.listen(port,()=> {
    console.log(`Server listening on port ${port}`);
})