const db = require('../models')

module.exports = {
    createBook: function(req, res) {
        console.log(req.body)
        db.Book.create(req.body)
        .then(bookData => console.log(bookData))
        .catch(err => {
            console.log(err)
            res.status(500).send()
          })
    },
    getBooks: function(req, res) {
        db.Book.find({})
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send()
        })
    }
}