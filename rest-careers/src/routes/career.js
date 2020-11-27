const express = require('express');
const router = express.Router();

const Career = require('../models/career');

router.get('/api/careers/', async (req, res) => {
    const careers = await Career.find();
    res.json(careers);
});

router.get('/api/careers/:id', async (req, res) => {
    const { id } = req.params;
    const career = await Career.findById(id);
    res.json(career);
});

router.post('/api/careers/', async (req, res) => {
    const career = new Career(req.body);
    await career.save()
    res.json({Status: "Career Saved"});
});

router.put('/api/careers/:id', async (req, res) => {
    const { id } = req.params
    await Career.update({_id: id}, req.body)
    res.json({Status: "Career Updated"});
})

router.delete('/api/careers/:id', async (req, res) => {
    const { id } = req.params
    await Career.remove({_id: id})
    res.json({Status: "Career Deleted"});
});

module.exports = router;

