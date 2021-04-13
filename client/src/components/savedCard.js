import React from 'react'
import Button from '../components/button'
import ViewButton from '../components/viewButton'
import API from '../utils/API'

function SaveCard(props) {

    
    const handleClick = () => {
        console.log(props._id)
         API.deletBook(props._id)
         .then(pageRefresh())
         .catch(err => console.log(err))
         }

    const pageRefresh = () => window.location.reload(true)
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6>by: {props.authors}</h6>
                        <p className="card-text">{props.description}</p>
                        <Button className="btn btn-outline-secondary" onClick={handleClick} type="submit">Delete</Button>
                        <ViewButton href={props.link} target="_blank" rel="noreferrer" className="btn btn-outline-secondary" type="click">View</ViewButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveCard