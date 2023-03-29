const express = require('express')
const router = express.Router()
const db = require('../connection')

router.get('/', async (req, res) => {
  let result = await db.query('SELECT * from orders LIMIT 10')
  res.json(result.rows)
})
const idAutoIncremental = async () => {
  let result = await db.query(
    'SELECT * FROM orders ORDER BY "order_id" desc LIMIT 1'
  )
  let lastIdOrder = result.rows[0].order_id
  let id = lastIdOrder + 1
  return id
  // res.json(result.rows)
}

router.post('/', async (req, res) => {
  let {
    order_id,
    customer_id,
    employee_id,
    order_date,
    require_date,
    shipped_date,
    ship_via,
    freight,
    ship_name,
    ship_address,
    ship_city,
    ship_region,
    ship_postal_code,
    ship_country
  } = req.body
  order_id = await idAutoIncremental()
  const insertQuery = `
    INSERT INTO orders ("order_id", "customer_id", "employee_id", "order_date", "required_date", "shipped_date", "ship_via", "freight", "ship_name", "ship_address", "ship_city", "ship_region", "ship_postal_code", "ship_country")
    VALUES(${order_id}, '${customer_id}', ${employee_id}, '${order_date}', '${require_date}', '${shipped_date}', ${ship_via}, ${freight}, '${ship_name}', '${ship_address}', '${ship_city}', '${ship_region}', ${ship_postal_code}, '${ship_country}')
  `
  console.log(insertQuery)
  try {
    await db.query(insertQuery, [
      order_id,
      customer_id,
      employee_id,
      order_date,
      require_date,
      shipped_date,
      ship_via,
      freight,
      ship_name,
      ship_address,
      ship_city,
      ship_region,
      ship_postal_code,
      ship_country
    ])
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.put('/', async (req, res) => {
  let result = await db.query(
    'UPDATE INTO pedidos(order_id, customer_id, employee_id, order_date, require_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
  )
  console.log(result.rows)
  res.json(result.rows)
})

router.delete('/', async (req, res) => {
  let result = await db.query(
    'DELETE INTO pedidos(order_id, customer_id, employee_id, order_date, require_date, shipped_date, ship_via, freight, ship_name, ship_address, ship_city, ship_region, ship_postal_code, ship_country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
  )
  console.log(result.rows)
  res.json(result.rows)
})

module.exports = router
