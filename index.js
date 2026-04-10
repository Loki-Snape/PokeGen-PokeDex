import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
let rP = 25;
let b = false;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res)=>{
    try{
        if(b){
            b=false;
        }
        else{
            b=false;
            rP = Math.floor(Math.random()*1025)+1;
        }
        const r = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rP}`)
        res.render("index.ejs", {
            name : r.data.name, 
            id : r.data.id, 
            type : r.data.types[0].type.name, 
            img : r.data.sprites.other["official-artwork"].front_default
        });
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
        res.render("error.ejs")
    }
})
app.post("/search", (req, res)=>{
    rP = req.body.pokemonName;
    b=true;
    res.redirect('/');
})

app.listen(port, ()=>{
    console.log(`Listening at port: ${port}`);
})