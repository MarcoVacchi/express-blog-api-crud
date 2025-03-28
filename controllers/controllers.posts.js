const posts = require("../data/posts");


//index, show, destroy;

// function index(req, res) {

//     res.json(posts);
    
// }; // primo index prima del bonus;


function show(req, res) {

    const currentId = Number(req.params.id);
      
    const currentPost = posts.find(posts => posts.id === currentId);
      
    currentPost ? res.json(currentPost) 
                : res.json({
                      status : 404,
                      error : "Id non trovato",
                      message: "Inserisci un id valido!"
                    });
};


function destroy(req, res) {
    const currentId = Number(req.params.id);
      
    const currentPost = posts.findIndex(posts => posts.id === currentId);

    if(currentPost !== -1) {
         posts.splice(currentPost,1)
         res.status(204).json()
        console.log(posts);
    } else {
        res.json({
        status : 404,
        error : "Id non trovato",
        message : "Inserisci un Id valido!"
  })}
                        
                        
    
};

// bonus;
function index(req, res) {
    if(req.query.tags){
        console.log("filtro per ingrediente");

        let filteredPosts = posts.filter(posts => posts.tags.includes(req.query.tags.toString()))
        return res.json(filteredPosts); 
      }
      res.json(posts); 
      // res.send("Lista dei post"); 
};
// {index, show, store, update, modify, destroy};
module.exports = {index, show, destroy};