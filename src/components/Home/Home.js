import React from 'react';
import fakeData from '../../Data/Data.json';
import Rides from '../Rides/Rides';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const [rides, setRides] = useState([]);
    useEffect(() => {
        setRides(fakeData);
    }, [])
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                {
                    rides.map(ride => <Rides ride={ride}></Rides>)
                }
            </div>
        </div>
    );
};

export default Home;