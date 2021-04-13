import axios from 'axios'

export default {
    SearchBooks: function (search) {
        const APIkey = process.env.REACT_APP_API_KEY
        return axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${APIkey}`)
    },
    // saveBooks: function(data) {
    //     return axios.post('/api/books', data)
    // }
}

