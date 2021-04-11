import React, { useEffect } from 'react'
import SearchBooks from '../utils/API'

function Search() {

    useEffect(SearchBooks(),[])

    return (
    <div>Search</div>
    )
}
 export default Search