const express = require("express");
const router = express.Router();

const {getallrecords, createrecord, updaterecord, getrecord, deleterecord} = require('../collectors/cmrs')

router.route('/').get(getallrecords).post(createrecord)


module.exports = router