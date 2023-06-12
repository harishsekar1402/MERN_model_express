const express = require('express')
const router = express.Router()
const {getemployee,newpost,updateemp,deleteemp} = require('./controller')


router.route('/').get(getemployee).post(newpost)
router.route('/:id').get(updateemp)
router.route('/:id').delete(deleteemp)

module.exports = router;
