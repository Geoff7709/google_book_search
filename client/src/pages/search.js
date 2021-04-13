import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import Button from '../components/button'

function Search() {
    const [form, setForm] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
       console.log(form)
       API.SearchBooks(form)
       .then(response => {
           const results = response.data.items
           results.map(book => console.log(book.volumeInfo))
       })
       .then( document.getElementById('searchForm').reset())
       .catch(err => console.log(err))
      
    }
    
    return (
        <form id='searchForm' onSubmit={handleSubmit} className="input-group mb-3">
            <input type="text" onChange={(e) => setForm(e.target.value)} name='form' 
              placeholder='What book are you looking for?' className="form-control"/>
            <Button className="btn btn-outline-secondary" type="submit">Search</Button>
        </form>
    )
}
export default Search