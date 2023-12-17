import React from 'react'
import './About.css';


const About = () => {
    return (
        <div style={{ backgroundColor: "#fffff5" }}>
            <div class="container">
                <div class="content">
                
                    <div style={{marginTop: "30px"}}>
                        <img src='Ellipse 46.png' style={{ width: "40px", height: "40px" }}/>
                        <div style={{ marginLeft: "800px", marginTop: "-40px"}}><img src='Ellipse 48.png' /></div>
                    </div><br />
                    
                    <p>Discover the beauty of the tropics</p>
                    
                    <h1 style={{ fontSize: '70px' }}><strong>
                        Tropical<br />
                        Destinations<br />
                        <div style={{ marginLeft: "570px", marginTop: "-90px"}}>
                            <img src='Ellipse 49.png' />
                    </div>
                    </strong>
                        For Student<br />
                       
                    </h1>
                    

                    

                    <p> Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer<br />
                        rutrum nisi. A nec nisl vitae</p>

                    <div style={{ marginLeft: "570px" }}>
                        <img src='Subtract1.png' />
                    </div>

                    <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#FFA500', borderRadius: '18px', border: 'none', color: 'white', width: '110px' }}>Signup</button>

                    <div style={{ marginLeft: "200px", marginTop: "20px" }}>
                        <img src='Ellipse 47.png' />
                    </div>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', marginRight: "150px" }}>
                    <div>
                        <img src="profile.png" style={{ width: '400px', height: 'auto', alignSelf: 'flex-start', margin: '-25px 0 0 -25px' }} alt="Profile" />
                    </div>
                    <div style={{ marginTop: "540px", marginLeft: "-90px" }}>
                        <img src='Subtract.png' style={{ width: "20px", height: "20px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
