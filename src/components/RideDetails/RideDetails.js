import React from 'react';
import { useState } from 'react';
import peopleIcon from '../../images/peopleicon.png';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import fakeData3 from '../../Data/Data3.json';
import '../RideDetails/RideDetails.css';
import Map from '../../images/Map.png';

const RideDetails = () => {
    const [startingToEnding, setStartingToEnding] = useState({});
    const [toggle, setToggle] = useState(true);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const location = startingToEnding;
        location.startFrom = data.startFrom;
        location.destination = data.destination;
        setStartingToEnding(location);
        setToggle(false); 
    }

    const vehicleType = useParams().vehicleType || 'car';


    const data = fakeData3;
    console.log(data[vehicleType]);


  
    const styleImg = {
        maxWidth: '130px',
        maxHeight: '130px',
        width: 'auto',
        height: 'auto'
    };
    return (
        <div className="container">
            <Header />
            <hr></hr>
            {
                (toggle) ?
                    (<div className="row">
                        <div className="col-md-6">
                            <div class="formContainer  mt-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label>PICK FROM: <br />
                                            <select name="startFrom" ref={register}>
                                                <option value="mirpur">mirpur</option>
                                                <option value="bashundhara">bashundhara</option>
                                                <option value="Adabor">Adabor</option>
                                                <option value="uttara">uttara</option>
                                                <option value="farmgate">farmgate</option>
                                                <option value="badda">badda</option>
                                            </select>
                                        </label>
                                        <br />
                                        <label>PICK TO: <br />
                                            <select name="destination" ref={register}>
                                            <option value="uttara">uttara</option>
                                            <option value="mirpur">mirpur</option>
                                                <option value="bashundhara">bashundhara</option>
                                                <option value="Adabor">Adabor</option>
                                                <option value="farmgate">farmgate</option>
                                                <option value="badda">badda</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label>DATE: <br />
                                        <input type="date" name="date" ref={register}></input>
                                    </label> <br />
                                    <input type="submit" value="Send pickup Request" />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img src={Map} alt="" />
                        </div>
                    </div>
                    ) :
                    (
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bg-info" style={{ padding: '40px 20px', borderRadius: '15px', color: 'white' }}>
                                    <h3>From: {startingToEnding.startFrom}</h3>
                                    <br />
                                    <h3>To: {startingToEnding.destination} </h3>
                                </div>

                                {

                                    data !== null && data[vehicleType].map(vehicle => {
                                        return <>
                                            <div className="destinationContainerStyle d-flex justify-content-between mt-4">
                                                <div className="d-flex justify-content-start">
                                                    <img src={vehicle.image} className="img-thumbnail" alt="..." style={styleImg} />
                                                    <h4 className="ml-3">{vehicleType} {vehicle.capacity}</h4>
                                                    <img src={peopleIcon} className="ml-3" alt="..." style={styleImg} /></div>
                                                <h4>{vehicle.rent}</h4>
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                            <div className="col-md-6 mt-5">
                                <img src={Map} alt="" />
                            </div>
                        </div>
                    )

            }

        </div>
    );
};

export default RideDetails;
