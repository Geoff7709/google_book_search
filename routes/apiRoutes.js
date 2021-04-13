const bookController = require('../controllers/bookController')

const router = require('express').Router()

router.route('/api/books')
.post(bookController.createBook)
.get(bookController.getBooks)

router.route('/api/books/:id')
.delete(bookController.deleteBook)

module.exports = router
