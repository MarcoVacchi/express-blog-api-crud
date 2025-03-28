const express = require("express");
const app = express();
const port = 3000;



app.use(express.static("public"));

console.log("ciao");

app.listen(port, ()=>{
    console.log("sono un server attivo sulla porta"+ " " + port)
});