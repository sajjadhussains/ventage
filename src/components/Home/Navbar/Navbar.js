import React from 'react';
import './Navbar.scss'
import logo from '../../../img/logo.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar top-navbar sticky-top navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand" href="/">
            <img src={logo} alt="Vantage"/>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi-list"
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav right-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="/training.html">
                        Training Sessions
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/coaches.html">
                        Coaches
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard.html">
                        Dashboard
                    </a>
                </li>
                <ul className="social-menu">
                    <li className="nav-item">
                        <a className="nav-link external-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.981" height="17.052"
                                viewBox="0 0 14.981 17.052">
                                <g transform="translate(-31.423 -0.39)">
                                    <path
                                        d="M46.4,4.66a4.3,4.3,0,0,1-2.6-.868A4.3,4.3,0,0,1,42.084.39H39.3V8l0,4.167a2.524,2.524,0,1,1-1.731-2.391V6.947a5.479,5.479,0,0,0-.8-.059A5.339,5.339,0,0,0,32.75,8.682a5.232,5.232,0,0,0,.236,7.215,5.431,5.431,0,0,0,.5.439,5.339,5.339,0,0,0,3.273,1.106,5.479,5.479,0,0,0,.8-.059A5.321,5.321,0,0,0,40.538,15.9a5.213,5.213,0,0,0,1.564-3.71l-.014-6.223A7.055,7.055,0,0,0,46.4,7.431V4.659H46.4Z"
                                        transform="translate(0)" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link external-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.877" height="15.337"
                                viewBox="0 0 18.877 15.337">
                                <g transform="translate(0)">
                                    <path
                                        d="M18.877,49.816a8.068,8.068,0,0,1-2.23.611,3.848,3.848,0,0,0,1.7-2.139,7.734,7.734,0,0,1-2.454.937A3.87,3.87,0,0,0,9.2,51.871a3.985,3.985,0,0,0,.09.882,10.954,10.954,0,0,1-7.977-4.048A3.871,3.871,0,0,0,2.5,53.878,3.822,3.822,0,0,1,.755,53.4v.042a3.888,3.888,0,0,0,3.1,3.8,3.862,3.862,0,0,1-1.015.127,3.422,3.422,0,0,1-.733-.066A3.907,3.907,0,0,0,5.724,60a7.776,7.776,0,0,1-4.8,1.651A7.249,7.249,0,0,1,0,61.6a10.9,10.9,0,0,0,5.937,1.737A10.939,10.939,0,0,0,16.951,52.325c0-.171-.006-.336-.014-.5A7.72,7.72,0,0,0,18.877,49.816Z"
                                        transform="translate(0 -48)" />
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link external-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 24 24">
                                <path
                                    d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link external-link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.065" height="20.069"
                                viewBox="0 0 20.065 20.069">
                                <path
                                    d="M20.463,5.9A7.333,7.333,0,0,0,20,3.466,5.141,5.141,0,0,0,17.06.529,7.352,7.352,0,0,0,14.625.063C13.551.012,13.21,0,10.485,0S7.419.012,6.349.059A7.335,7.335,0,0,0,3.914.525a4.9,4.9,0,0,0-1.78,1.161A4.941,4.941,0,0,0,.978,3.462,7.353,7.353,0,0,0,.511,5.9C.46,6.971.449,7.312.449,10.037S.46,13.1.507,14.173a7.333,7.333,0,0,0,.467,2.435A5.14,5.14,0,0,0,3.91,19.544a7.353,7.353,0,0,0,2.435.466c1.07.047,1.411.059,4.136.059s3.066-.012,4.136-.059a7.331,7.331,0,0,0,2.435-.466,5.133,5.133,0,0,0,2.937-2.936,7.358,7.358,0,0,0,.466-2.435c.047-1.07.059-1.411.059-4.136s0-3.066-.051-4.136Zm-1.807,8.194a5.5,5.5,0,0,1-.345,1.862,3.329,3.329,0,0,1-1.905,1.905,5.52,5.52,0,0,1-1.862.345c-1.059.047-1.376.059-4.054.059s-3-.012-4.054-.059a5.5,5.5,0,0,1-1.862-.345,3.088,3.088,0,0,1-1.153-.749,3.12,3.12,0,0,1-.749-1.153A5.521,5.521,0,0,1,2.327,14.1c-.047-1.059-.059-1.376-.059-4.054s.012-3,.059-4.054a5.5,5.5,0,0,1,.345-1.862,3.05,3.05,0,0,1,.753-1.153,3.115,3.115,0,0,1,1.153-.749,5.524,5.524,0,0,1,1.862-.345c1.059-.047,1.376-.059,4.054-.059s3,.012,4.054.059a5.5,5.5,0,0,1,1.862.345,3.086,3.086,0,0,1,1.153.749,3.12,3.12,0,0,1,.749,1.153,5.523,5.523,0,0,1,.345,1.862c.047,1.059.059,1.376.059,4.054s-.012,2.991-.059,4.05Zm0,0"
                                    transform="translate(-0.449 0)" />
                                <path
                                    d="M130.262,124.5a5.313,5.313,0,1,0,5.313,5.313A5.315,5.315,0,0,0,130.262,124.5Zm0,8.76a3.447,3.447,0,1,1,3.447-3.447A3.447,3.447,0,0,1,130.262,133.26Zm0,0"
                                    transform="translate(-120.226 -119.777)" />
                                <path
                                    d="M364.779,89.766a1.165,1.165,0,1,1-1.165-1.165A1.165,1.165,0,0,1,364.779,89.766Zm0,0"
                                    transform="translate(-348.195 -85.113)" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</nav>
    );
};

export default Navbar;