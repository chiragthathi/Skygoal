import React from 'react'

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'white', position: 'sticky', top: '0', zIndex: '100' }}>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" style={{ position: 'relative', left: '-100px' }}>
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
                        </ul>
                        <div className="d-flex align-items-center" style={{ position: 'relative', left: '-100px' }}>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true" href="#">Offers</a>
                                </li>
                            </ul>
                            <form className="d-flex ml-3" role="search">
                                <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#FFA500', borderRadius: '18px', border: 'none', color: 'white', width: '110px' }}>Courses</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
