import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ marginTop: '130px' }}>
            <div style={{ alignItems: 'center' }}>
                <h1>Student Special: Discounted rates <br /> on tropical getaways!</h1>
                <p>Let's embody your beautiful ideas together, simplify the <br/> way you visualize your next big things.</p>
            </div>

            <div style={{ marginTop: '30px' }}>
                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', padding: 0 }}>
                    <li className="nav-item">
                        <a className="nav-link1" aria-current="page" href="#">Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link1" href="#">Terms of Use</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link1" href="#">Sales and Refunds</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link1" href="#">Membership</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link1" href="#">Legal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Schedules</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Membership</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Joins</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
