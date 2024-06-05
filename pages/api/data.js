import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'm2',
        password: '123456',
        database: 'hansei'
    });

    try {
        const [rows1] = await db.query('SELECT * FROM categories');
        const [rows2] = await db.query('SELECT * FROM part');
        const [rows3] = await db.query('SELECT * FROM category_has_info');
        res.status(200).json({ table1: rows1, table2: rows2,  table3: rows3});
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await db.end();
    }
}
