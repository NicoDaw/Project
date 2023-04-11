const express = require('express')
const router = express.Router()
const db = require('../connection')

//GET 
router.get('/', async (req, res) => {
    try {
        let result = await db.query('SELECT * FROM region');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        let result = await db.query(`SELECT * FROM territories WHERE region_id = ${req.params.id}`);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(err);
    }
})

module.exports = router