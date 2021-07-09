import React from 'react';
import player from '../../../img/player.svg';
import './HeaderMain.scss';

const HeaderMain = () => {
    return (
        <section>
            <section className="hero-section">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-8 d-md-block d-none">
                <h1 className="heading">Private coaching and instructional
                  training videos from current college
                  athletes</h1>
    
                <h3 className="sub-heading">Elevate your game by training with a current college athlete</h3>
    
                <div className="btn-container">
                  <button type="button" className="btn goto btn-primary" data-scrollto=".join-section">Sing Up</button>
                </div>
              </div>
    
              <div className="player-img-container">
                <img src={player} alt="image"/>
              </div>
            </div>
          </div>
        </section>
    
       
        <section className="mbl-hero-section">
          <div className="container position-relative">
            <div className="row">
              <div className="col-12 d-md-none d-block">
                <h1 className="heading">Private coaching and instructional
                  training videos from current college
                  athletes</h1>
    
                <h3 className="sub-heading">Elevate your game by training with a current college athlete</h3>
    
                <div className="btn-container">
                  <button type="button" className="btn goto btn-primary" data-scrollto=".join-section">Sing Up</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
    );
};

export default HeaderMain;