const bookController = require('../controller/bookController')

const router = require('express').Router()

router.route('/api/books')
.get(bookController.createBook)