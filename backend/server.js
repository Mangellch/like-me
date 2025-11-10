import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import {agregarPosts, obtenerPosts} from './consultas.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts',async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, url: img, descripcion } = req.body
  await agregarPosts(titulo, img, descripcion)
  res.send("Post agregado con éxito")
})

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));