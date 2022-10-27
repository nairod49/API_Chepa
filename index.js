const express = require('express')
const app = express()

const username="test";
const password="test";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:test@cluster0.lipmloq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("api_chepa").collection("dechet");
  
  client.close();
});


app.listen(8080, () => {    console.log("Serveur à l'écoute")})
