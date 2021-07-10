import React, { useEffect } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { getAllHotels } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllHotels())
    }, [])

    const state = useSelector(state => state)
    return (
        <div>
            <div className="container">
                <h1 className="mt-3 text-white bg-dark p-2" style={{ width: "165px" }}>HOTELS</h1>
                <div className="row mt-4">

                    <div className="col-md-4 d-flex mt-2">
                        <input type="text" className="form-control" placeholder="Search by Name" style={{ width: "210px" }} />
                        <button className="btn btn-dark mx-1" >Search</button>
                    </div>

                    <div className="col-md-4 d-flex mt-2">
                        <input type="text" className="form-control" placeholder="Search by Price" style={{ width: "210px" }} />
                        <button className="btn btn-dark mx-1">Search</button>
                    </div>

                    <div className="col-md-4 d-flex mt-2">
                        <input type="text" className="form-control" placeholder="Search by Rooms" style={{ width: "210px" }} />
                        <button className="btn btn-dark mx-1">Search</button>
                    </div>
                </div>
                <div className="row mt-3">
                    {state.allHotels ? state.allHotels.map((hotel, index) => {
                        return (
                            <div className="col-md-4">
                                <Card imgUrl={hotel.imgPath} hotel={hotel.hotel_name} rooms={hotel.no_of_rooms} price={hotel.per_day_price} service={hotel.services} />
                            </div>
                        )
                    }) :<center><div class="loader"></div></center>}
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home
