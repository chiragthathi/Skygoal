import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div style={{marginTop: '70px'}}>
            <div style={{ alignItems: 'center' }}>
                <h1>Testimonials</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                <div className="card" style={{ width: '18rem', border: 'none' }}>
                    <img src="Rectangle 16.png" className="rounded-circle card-img-top" alt="..." style={{ width: '100px', height: '100px', marginLeft: '100px' }} />
                    <div className="card-body">
                        <h5 className="card-title">Corey Korsgaard</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem',  border: 'none' }}>
                    <img src="Rectangle 16.png" className="rounded-circle card-img-top" alt="..." style={{ width: '100px', height: '100px', marginLeft: '100px' }} />
                    <div className="card-body">
                        <h5 className="card-title">Corey Korsgaard</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', border: 'none' }}>
                    <img src="Rectangle 16.png" className="rounded-circle card-img-top" alt="..." style={{ width: '100px', height: '100px', marginLeft: '100px' }} />
                    <div className="card-body">
                        <h5 className="card-title">Corey Korsgaard</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
