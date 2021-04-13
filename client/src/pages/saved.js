import React, { useEffect, useState} from 'react'
import Container from '../components/container'
import Row from '../components/row'
import SaveCard from '../components/savedCard'
import API from '../utils/API'

function Saved() {
    const [savedBooks, setSavedBooks] = useState([])
    useEffect(() => {
        API.getBooks()
        .then(response => setSavedBooks(response.data))
        .catch(err => console.log(err))
    },[])
    return (
        <Container>
            <Row>
                <h2>Saved Books</h2>
            </Row>
        </Container>
    )
}
export default Saved