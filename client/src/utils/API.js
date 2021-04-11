import React, { useState } from 'react'
import axios from 'axios'

function SearchBooks() {
    const APIkey = process.env.REACT_APP_API_KEY
    console.log(APIkey)
    axios(`https://www.googleapis.com/books/v1/volumes?q=harry potter&key=${APIkey}`)
    .then(response => {
       const results =  response.data.items
       results.map(book => console.log(book.volumeInfo))
    })
    .catch(err => console.log(err))
}

export default SearchBooks