/* 
    Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate (404) e uno per la gestione degli errori (500).
- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

*/






const posts = require("../data/posts");
const express = require("express");
const router = express.Router();
const routerControllers = require("../controllers/controllers.posts");


router.get("/",(routerControllers.index));

router.get("/:id",(routerControllers.show));

router.delete("/:id",(routerControllers.destroy));

router.post("/",(routerControllers.store));

router.put("/:id",(routerControllers.update));


//console.log(posts);

// router.get("/:id",(req, res) =>{
    
//     const { id } = req.params;
//     res.send(`modifica tutto il dolce alla posizione ${id}`);

// });   

module.exports = router;