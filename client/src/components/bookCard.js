import React from 'react'
import Button from '../components/button'
import ViewButton from '../components/viewButton'

function BookCard(props) {
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
                        <Button className="btn btn-outline-secondary" type="submit">Save</Button>
                        <ViewButton href={props.infoLink} className="btn btn-outline-secondary" type="click">View</ViewButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard