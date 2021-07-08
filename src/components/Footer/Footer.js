import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="quick-nav">
                                <div className="title">About</div>
    
                                <ul className="nav-list">
                                    <li className="list-item"><a href="" className="list-link">Features</a></li>
                                    <li className="list-item"><a href="" className="list-link">Our Team</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-6">
                            <div className="quick-nav">
                                <div className="title">Support</div>
    
                                <ul className="nav-list">
                                    <li className="list-item"><a href="" className="list-link">Documentation</a></li>
                                    <li className="list-item"><a href="/faq.html" className="list-link">FAQ</a></li>
                                    <li className="list-item"><a href="" className="list-link">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-6">
                            <div className="quick-nav">
                                <div className="title">Legal</div>
    
                                <ul className="nav-list">
                                    <li className="list-item"><a href="" className="list-link">Terms of Use</a></li>
                                    <li className="list-item"><a href="" className="list-link">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-6">
                            <div className="quick-nav">
                                <div className="title">Press</div>
    
                                <ul className="nav-list">
                                    <li className="list-item"><a href="" className="list-link">News Releases</a></li>
                                    <li className="list-item"><a href="" className="list-link">PR Stuff</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;