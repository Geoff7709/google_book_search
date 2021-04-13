import React from 'react'
import Button from '../components/button'
import ViewButton from '../components/viewButton'
import API from '../utils/API'

function SaveCard(props) {
    const handleClick = () => {
        const bookData = {
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.imageLinks.thumbnail,
            link: props.infoLink
        }
        API.saveBook(bookData)
        .then(response => console.log(response))
        .catch(err => console.log)
        }
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imageLinks.thumbnail} alt={props.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6>by: {props.authors}</h6>
                        <p className="card-text">{props.description}</p>
                        <Button className="btn btn-outline-secondary" onClick={handleClick} type="submit">Save</Button>
                        <ViewButton href={props.infoLink} target="_blank" rel="noreferrer" className="btn btn-outline-secondary" type="click">View</ViewButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveCard