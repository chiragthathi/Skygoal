import React from 'react'
import './About.css';
import './Membership.css';
import { useState } from 'react';

const Membership = () => {
    const [starValue, setStarValue] = useState(0);
    const [roomValue, setRoomValue] = useState(0);

    const increment = (input) => {
        if (input === 'star') {
            setStarValue((prevValue) => prevValue + 1);
        } else if (input === 'room') {
            setRoomValue((prevValue) => prevValue + 1);
        }
    };

    const decrement = (input) => {
        if (input === 'star') {
            setStarValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
        } else if (input === 'room') {
            setRoomValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
        }
    };

    return (
        <div>
            <div class="container">
                <div class="content">
                    <div >
                        <img src="Group 167.png" style={{ width: '400px', height: 'auto', alignSelf: 'flex-start', margin: '-25px 0 0 -25px', marginLeft: '40px', }} alt="Profile" />

                    </div>
                </div>
                <div class="shadow-box" style={{ marginTop: '70px', marginLeft: '200px' }}>
                    <div style={{ marginRight: '150px' }}>
                        <h1><strong>Book now</strong></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="city">CITY</label>
                            <input type="text" id="city" name="city" placeholder="placeholder" class="light-grey-input" />
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="arrival">ARRIVAL</label>
                                    <input type="text" id="arrival" name="arrival" placeholder="Enter arrival" class="light-grey-input" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="departure">DEPARTURE</label>
                                    <input type="text" id="departure" name="departure" placeholder="Enter departure" class="light-grey-input" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="increment1">STAR</label>
                                    <div className="increment-inputs">
                                        <div className="rectangle-input">
                                            <button type="button" className="left-button" onClick={() => decrement('star')}>-</button>
                                            <input
                                                type="number"
                                                id="increment1"
                                                name="increment1"
                                                value={starValue}
                                                className="light-grey-input"
                                            />
                                            <button type="button" className="right-button" onClick={() => increment('star')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="increment2">ROOM</label>
                                    <div className="increment-inputs">
                                        <div className="rectangle-input">
                                            <button type="button" className="left-button" onClick={() => decrement('room')}>-</button>
                                            <input
                                                type="number"
                                                id="increment2"
                                                name="increment2"
                                                value={roomValue}
                                                className="light-grey-input"
                                            />
                                            <button type="button" className="right-button" onClick={() => increment('room')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <button class="btn btn-black btn-circular" type="button" id="button-addon1">BOOK NOW</button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Membership
