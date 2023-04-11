const express = require('express')
const router = express.Router()
const db = require('../connection')

//GET
router.get('/', async (req, res) => {
    try {
        let result = await db.query('SELECT * from employees ORDER BY employee_id');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//POST
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let data = req.body;
        let result = await db.query(`INSERT INTO employees (employee_id, last_name, first_name, title, title_of_courtesy, birth_date, hire_date, address, city, region, postal_code, country, home_phone, extension, notes, reports_to, photo, photo_path) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)`, [data.id, data.apellido, data.nombre, data.titulo, data.cortesia, data.nacimiento, data.alta, data.direccion, data.ciudad, data.region, data.cp, data.pais, data.telefono, data.extension, data.notas, data.reporta, null, data.foto]);
        res.send(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//PUT
router.put('/:id', async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;
        console.log(data.id);
        console.log(data);
        let result = await db.query(`UPDATE employees SET last_name=$1, first_name=$2, birth_date=$3, hire_date=$4, city=$5, region=$6, country=$7, extension=$8, title=$9 WHERE employee_id = $10`, [data.apellido, data.nombre, data.nacimiento, data.alta, data.ciudad, data.region, data.pais, data.extension, data.titulo, data.id]);
        res.json(`El usuario con id ${id} ha sido actualizado correctamente`);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let result = await db.query('DELETE FROM employees WHERE employee_id = $1', [req.params.id])
        res.send(result)
    } catch (err) {
        console.log(err);
        res.send(err);
    }

})

module.exports = router