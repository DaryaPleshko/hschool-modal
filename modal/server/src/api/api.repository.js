const { pool } = require("../db");

const userCreateDB = async (name, email, password) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sqlInfo = `
        INSERT INTO users ( name, email, password ) 
        VALUES ($1, $2, $3) RETURNING users.*
    `;
        const objInfo = (await client.query(sqlInfo, [name, email, password])).rows;

        if (!objInfo.length) throw new Error('Некорректный ввод');

        await client.query('COMMIT');

        return objInfo;
    } catch (error) {
        console.log('error in userCreateDB');
        await client.query('ROLLBACK');
    }

}

const userGetDB = async () => {
    const client = await pool.connect();
    try {
        const sqlInfo = `
        SELECT * from users
        `;
        const objInfo = (await client.query(sqlInfo)).rows;

        if (!objInfo.length) throw new Error('Некорректный ввод');
        return objInfo;
    } catch (error) {
        console.log('error in userGetDB');
    }

}

module.exports = { userCreateDB, userGetDB }