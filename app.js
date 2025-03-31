const express = require("express");
const app = express();
const port = 3000;
const router = require("./router/postRouter");

app.use(express.static("public"));

app.use(express.json());



app.use("/postRouter", router);

//console.log("ciao");

app.listen(port, ()=>{
    console.log("sono un server attivo sulla porta"+ " " + port)
});