const express = require('express')
const router = express.Router()
const db = require('../connection')

router.get('/', async (req, res) => {
    let result = await db.query('SELECT * from products');
    console.log(result.rows);

})

module.exports = router