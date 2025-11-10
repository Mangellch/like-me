import pg from 'pg';

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'likeme',
    allowExitOnIdle: true
})

const agregarPosts = async (titulo, img, descripcion) => {
    const consulta = 'INSERT INTO posts values (DEFAULT,$1, $2, $3)';
    const values = [titulo, img, descripcion];
    const result = await pool.query(consulta, values);
    console.log('Post agregado:', result);
}


const obtenerPosts = async () => {
    const { rows } = await pool.query ('SELECT * FROM posts');
    console.log(rows);
    return rows;
}


export {
    agregarPosts,
    obtenerPosts
}