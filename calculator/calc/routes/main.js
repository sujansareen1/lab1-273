var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/plus', function(req, res, next) {
    const conc = Number(req.body.first) + Number(req.body.second);
    console.log(conc);
    res.json(conc);
});

router.post('/minus', function(req, res, next) {
    const conc = Number(req.body.first) - Number(req.body.second);
    console.log(conc);
    res.json(conc);
});

router.post('/divide', function(req, res, next) {
    const conc = Number(req.body.first) / Number(req.body.second);
    console.log(conc);
    res.json(conc);
});

router.post('/multiply', function(req, res, next) {
    const conc = Number(req.body.first) * Number(req.body.second);
    console.log(conc);
    res.json(conc);
});

module.exports = router;
