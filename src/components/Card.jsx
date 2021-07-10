import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card m-2 Card justify-content-center d-flex" style={{ width: '18rem' }}>
                <div>
                    <img src={props.imgUrl} className="card-img-top" alt="..." />
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title mx-5">{props.hotel}</h5>
                    <p className="card-text">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>ROOMS:</b> {props.rooms} <i className="fas fa-hotel service"></i></li>
                            <li className="list-group-item"><b>PRICE:</b> {props.price} <i class="far fa-money-bill-alt service"></i></li>
                            <li className="list-group-item"><b>SERIVES:</b> {props.service}<i className="fas fa-bed service"></i></li>
                        </ul>
                    </p>
                    <center>
                        <a href="#" className="btn btn-success btn -block">Book Now <i className="fas fa-arrow-right"></i></a></center>
                </div>
            </div>
        </div>
    )
}

export default Card
