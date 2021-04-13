import React, { useEffect, useState } from 'react'
import API from '../utils/API'
import Button from '../components/button'
import Container from '../components/container'
import Row from '../components/row'
import BookCard from '../components/bookCard'

function Search() {
    const [bookSearch, setBookSearch] = useState([])
    const [form, setForm] = useState()

    useEffect(() => console.log(bookSearch), [bookSearch])

    const handleSubmit = (e) => {
        e.preventDefault()
        API.SearchBooks(form)
            .then(response => {
                const results = response.data.items
                let search = []
                results.map(book => search.push(book.volumeInfo))
                setBookSearch(search)
                search = []
            })
            .then(document.getElementById('searchForm').reset())
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <Row>
                <form id='searchForm' onSubmit={handleSubmit} className="input-group mb-3">
                    <input type="text" onChange={(e) => setForm(e.target.value)} name='form'
                        placeholder='What book are you looking for?' className="form-control" />
                    <Button className="btn btn-outline-secondary" type="submit">Search</Button>
                </form>
            </Row>
            {bookSearch.map(book => (
                <Row key={Math.floor(Math.random() * 100000)}>
                    <BookCard {...book} />
                </Row>
            ))}

        </Container>
    )
}
export default Search