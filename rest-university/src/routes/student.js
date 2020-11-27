const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/api/students/', (req, res) => {
    mysqlConnection.query("SELECT * FROM student", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/students/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("SELECT * FROM student WHERE id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/students/', (req, res) => {
    const { cedula, nombre, apellidos, email, direccion, career_id } = req.body;
    mysqlConnection.query("INSERT INTO student (cedula, nombre, apellidos, email, direccion, career_id) VALUES (?, ?, ? , ?, ?, ?)", [cedula, nombre, apellidos, email, direccion, career_id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Student Saved' })
        } else {
            console.log(err);
        }
    });
});

router.put('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const { cedula, nombre, apellidos, email, direccion, career_id } = req.body;
    mysqlConnection.query("UPDATE student SET cedula = ?, nombre = ?, apellidos = ?, email = ?, direccion = ?, career_id = ? WHERE id = ?", [cedula, nombre, apellidos, email, direccion, career_id, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Student Updated' })
        } else {
            console.log(err);
        }
    });
});

router.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("DELETE FROM student WHERE id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Student Deleted' })
        } else {
            console.log(err);
        }
    });
});

module.exports = router;