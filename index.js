//const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"; 
dotenv.config();
console.log(process.env);

const app = express();
const PORT = 9000;

app.use(express.json())


const movies = [
    {
      picture: "https://moviegalleri.net/wp-content/uploads/2020/01/Hero-Suriya-Soorarai-Pottru-Movie-Teaser-Release-Jan-7th-Poster-HD.jpg",
      name: "Soorarai Pottru"
    },
    {
      picture: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/df4fd318873133.562d0c6720176.png",
      name: "Anjaan"
    },
    {
      picture: "https://m.media-amazon.com/images/M/MV5BNDJhNWRjMjgtNzg1NS00YjBjLThlZjUtYTViNjdjOGZmNmQ2XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg",
      name: "Baba"
    },
    {
      picture: "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UX1000_.jpg",
      name: "Maanaadu"
    },
    {
      picture: "https://www.thehindu.com/entertainment/movies/z5lmd3/article35738194.ece/BINARY/jai",
      name: "Jai Bhim"
    },
    {
      picture: "https://images-na.ssl-images-amazon.com/images/I/71JmxE8pC1L._RI_.jpg",
      name: "Annaamalai"
    },
    {
      picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWQ5phF7_mITj-vhcGLg5vGKSXF1KmhjWNblq-8PSdW8IAbICb",
      name: "Aayirathil Oruvan"
    },
    {
      picture: "https://static.moviecrow.com/gallery/20141008/46940-64ecbf36008c17a7bd5e0ccbe4daa47a.jpg",
      name: "Goa"
    },
    {
      picture: "https://images-na.ssl-images-amazon.com/images/I/71LX0gmM7lL._RI_.jpg",
      name: "Polladhavan"
      
    },
    
    {
      picture: "https://pbs.twimg.com/media/E-NbX-uUcAE8BWS.jpg",
      name: "Mankatha"
      
    },
    {
      picture: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul13/image-51236-r50u94uqxl.jpg",
      name: "Anjathe"
      
    },
    {
      picture: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/512/512/0/94/41/c3b4cfd09aac11e990e939ad7f02823a_1562999216322_p_medium.jpg",
      name: "Vettaiyaadu Vilaiyaadu"
      
      
    },
    {
      picture: "https://upload.wikimedia.org/wikipedia/en/d/d7/Valimai_poster.jpg",
      name: "Valimai"
      
    },
    {
      picture: "https://i.scdn.co/image/ab67616d0000b273a591472e6968e41cede6c706",
      name: "Naveena Saraswathi Sabatham"
      
      
    },
  ];


 
  const MOVIE_URL = process.env.MOVIE_URL;

  async function createConnection(){
      const client = new MongoClient(MOVIE_URL);
      await client.connect(); //promise
      console.log("Mongodb Connected");
      return client;
    }
    export const client = await createConnection()
  
    app.post("/movies", async (request, response) => {
        const data = request.body;
        const result = await client
        .db("moviesbook")
        .collection("moviesbook")
        .insertMany(data);
        response.send(data);
    });

app.get("/movies", (request, response)=>{
    response.send(movies);
    });


    app.listen(PORT, ()=> console.log("App is started", PORT));


//console.log("Hello, world");