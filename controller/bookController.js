const db = require('../model/Books')

module.exports = {
    createBook: function(req, res) {
        db.Book.create(req.body)
        .then(bookData => console.log(bookData))
        .catch(err => {
            console.log(err)
            res.status(500).send()
          })
    }
}