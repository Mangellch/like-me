import pg from 'pg';

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});

// AGREGAR POST
const agregarPosts = async (titulo, img, descripcion) => {
    try {
        const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)';
        const values = [titulo, img, descripcion];
        await pool.query(consulta, values);
    } catch (error) {
        console.error("Error al agregar post:", error);
        throw error;
    }
};

// OBTENER POSTS
const obtenerPosts = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts ORDER BY id DESC');
        return rows;
    } catch (error) {
        console.error("Error al obtener posts:", error);
        throw error;
    }
};

// ACTUALIZAR LIKES (PUT)
const actualizarLikes = async (id, likes) => {
    try {
        const consulta = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *";
        const values = [likes, id];
        const result = await pool.query(consulta, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error al actualizar likes:", error);
        throw error;
    }
};

// ELIMINAR POST (DELETE)
const eliminarPost = async (id) => {
    try {
        const consulta = "DELETE FROM posts WHERE id = $1";
        const result = await pool.query(consulta, [id]);
        return result.rowCount > 0;
    } catch (error) {
        console.error("Error al eliminar post:", error);
        throw error;
    }
};

export {
    agregarPosts,
    obtenerPosts,
    actualizarLikes,
    eliminarPost
}
