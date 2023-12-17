import React from 'react'
import './About.css';


const Discounts = () => {
    return (
        <div style={{ backgroundColor: 'white', marginTop: '30px' }}>
            <div class="container">
                <div class="content">
                    <div style={{ marginTop: "40px" }}>
                        <img src='Ellipse 46.png' style={{ width: "40px", height: "40px" }} />
                    </div>
                    <p>Get 20% off for student</p>
                    <h1><strong>
                        Student discounts available.<br />
                        <div style={{ marginLeft: "560px",  marginTop: "-50px"}}>
                            <img src='Ellipse 55.png' />
                        </div>
                    </strong>
                        Get ready for some fun in the sun!<br />
                    </h1>
                    <p> • Lorem ipsum dolor sit amet<br />
                        • Massa quis natoque sit quam<br />
                        • Eros non pellentesque elit<br />
                        • tortor id euismod habitant<br />
                        • Sed suspendisse id in ultrices</p>

                    <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#FFA500', borderRadius: '18px', border: 'none', color: 'white', width: '150px' }}>Explore More</button>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <img src="Mask group.png" style={{ width: '400px', height: 'auto', alignSelf: 'flex-start', margin: '-25px 0 0 -25px' }} alt="Profile" />
                </div>
            </div>
        </div>
    )
}

export default Discounts
