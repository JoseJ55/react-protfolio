const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/project/:id', apiRoutes)