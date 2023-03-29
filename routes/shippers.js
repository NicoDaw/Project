const express = require('express')
const router = express.Router()
const db = require('../connection')

router.get('/', async (req, res) => {
  try {
    let result = await db.query('SELECT * from shippers')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router