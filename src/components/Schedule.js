import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (

        <div>
            <div style={{ marginLeft: '-1019px' }}>
                <h1>Our Destination</h1>
            </div>
            <div className="card-container" style={{ marginTop: '30px' }}>
                <div class="card">
                    <img src="card-image.png" />
                    <div class="card-body" >
                        <h3 class="card-1">Harvard University</h3>
                    </div>
                    <div class="card-2">
                        <p>Cambridge, Massachusetts, UK</p>
                        <div className="circle-container">
                            <div className="grey-circle">
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="card">
                    <img src="card-image-1.png" />
                    <div class="card-body">
                        <h5 class="card-1">Oxford University</h5>
                    </div>
                    <div class="card-2">
                        <p>Oxford,England</p>
                        <div className="circle-container">
                            <div className="grey-circle">
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="card-image-2.png" />
                    <div class="card-body">
                        <h5 class="card-1">Stanford University</h5>
                    </div>
                    <div class="card-2">
                        <p>Stanford, California</p>
                        <div className="circle-container">
                            <div className="grey-circle">
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card">
                    <img src="card-image-3.png" style={{ height: '360px', width: '300px' }} />
                    <div class="card-body">
                        <h5 class="card-1">Nanyang Technological University</h5>
                    </div>
                    <div class="card-2">
                        <p>Nanyang Ave, Singapura</p>
                        <div className="circle-container">
                            <div className="grey-circle">
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                                <div className="black-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img src="..." />
                    <div class="card-body">
                        <h5 class="card-1">Card 1</h5>
                    </div>
                </div>
                <div class="card">
                    <img src="..." />
                    <div class="card-body">
                        <h5 class="card-1">Card 1</h5>
                    </div>
                </div>
            </div>
            <div>
                <img src="Frame 28.png" />
            </div>
        </div>

    );
}

export default Schedule;
