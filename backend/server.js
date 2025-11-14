import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { agregarPosts, obtenerPosts, actualizarLikes, eliminarPost } from './consultas.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// GET
app.get('/posts', async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

// POST
app.post("/posts", async (req, res) => {
  try {
    const { titulo, url: img, descripcion } = req.body;
    await agregarPosts(titulo, img, descripcion);
    res.send("Post agregado con éxito");
  } catch (error) {
    res.status(500).json({ error: "Error al agregar post" });
  }
});

// PUT (Actualizar likes)
app.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { likes } = req.body;

    const postActualizado = await actualizarLikes(id, likes);
    res.json(postActualizado);

  } catch (error) {
    res.status(500).json({ error: "Error al actualizar likes" });
  }
});

// DELETE (Eliminar post)
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = await eliminarPost(id);

    if (!eliminado) return res.status(404).json({ error: "Post no encontrado" });

    res.json({ message: "Post eliminado correctamente" });

  } catch (error) {
    res.status(500).json({ error: "Error al eliminar post" });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

