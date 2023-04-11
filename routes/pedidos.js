const express = require('express')
const router = express.Router()
const db = require('../connection')

router.get('/', async (req, res) => {
  let result = await db.query(
    // 'SELECT * FROM orders ORDER BY "order_id" desc LIMIT 10'
    'SELECT * FROM orders ORDER BY "order_id" asc LIMIT 10'

  )
  res.json(result.rows)
})
const idAutoIncremental = async () => {
  let result = await db.query(
    'SELECT order_id FROM orders ORDER BY "order_id" desc LIMIT 1'
  )
  let lastIdOrder = result.rows[0].order_id
  let id = lastIdOrder + 1
  return id
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

router.get('/:id', async (req, res) => {
  let result = await db.query(
    `SELECT * FROM orders WHERE order_id = ${req.params.id}`
  )
  console.log(result.rows)
  res.json(result.rows)
})

router.put('/:id', async (req, res) => {
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
  try {
    let result = await db.query(
      `UPDATE orders SET
      customer_id = '${customer_id}',
      employee_id = ${employee_id},
      order_date = '${order_date}',
      required_date = '${require_date}',
      shipped_date = '${shipped_date}',
      ship_via = ${ship_via},
      freight = ${freight},
      ship_name = '${ship_name}',
      ship_address = '${ship_address}',
      ship_city = '${ship_city}',
      ship_region = '${ship_region}',
      ship_postal_code = ${ship_postal_code},
      ship_country = '${ship_country}'
      WHERE order_id = ${order_id}
      `
    )
    console.log(result.rows)
    res.json(result.rows)
  } catch (error) {
    console.log(error);
  }
})

router.delete('/:id', async (req, res) => {
  let result = await db.query(
    `DELETE FROM orders WHERE order_id = ${req.params.id}`
  )
  console.log(result.rows)
  res.json(result.rows)
})

module.exports = router
