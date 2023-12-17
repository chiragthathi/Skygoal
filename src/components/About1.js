import React from 'react';
import './About1.css';

const About1 = () => {
    return (

        <div className="wrapper">
            <div class="box" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '350px', marginTop: '80px' }}>
                {/* Box 1 */}
                <div className="box-with-shadow" style={{ width: '290px', height: '100px', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '50px' }}>
                    <div className="circle-image" style={{ width: '100px', height: '60px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                        <img className="image-content" src="Group 167.png" style={{ backgroundColor: "lightblue" }} />
                    </div>
                    <div>
                        <p><strong>Jenny Wilson</strong><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="box-with-shadow" style={{ width: '290px', height: '100px', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '50px' }}>
                    <div className="circle-image" style={{ width: '100px', height: '60px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                        <img className="image-content" src="Group 167.png" style={{ backgroundColor: "pink" }} />
                    </div>
                    <div>
                        <p><strong>Jenny Wilson</strong><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="box-with-shadow" style={{ width: '290px', height: '100px', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '50px' }}>
                    <div className="circle-image" style={{ width: '100px', height: '60px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                        <img className="image-content" src="Group 167.png" style={{ backgroundColor: "lightgrey" }} />
                    </div>
                    <div>
                        <p><strong>Jenny Wilson</strong><br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
            </div>

            <div>
            
            
            <div style={{marginTop: "30px"}}>
                    <img src='Ellipse 46.png' style={{ width: "40px", height: "40px", marginLeft: "-800px"}}/>
                    
            </div>
            
            <div class="content1" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: '250px', marginTop: '5px'}}>
                
                <h1><strong>
                    Tropical Adventure<br />
                </strong>
                    for Student<br />
                </h1>
                <p>Student Tropical Vacation: Relax and Recharge</p><br />
                <p>• Lorem ipsum dolor sit amet<br />
                    • Massa quis natoque sit quam<br />
                    • Eros non pellentesque elit<br />
                    • tortor id euismod habitant<br />
                    • Sed suspendisse id in ultrices</p>

                <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#FFA500', borderRadius: '18px', border: 'none', color: 'white', width: '150px' }}>Explore More</button>
            </div>
        </div>
        </div>

    );
}

export default About1;
