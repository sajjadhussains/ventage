import React, { useEffect } from 'react';
import athlete from '../../../img/athlete.svg'
import university from '../../../img/university.svg'
import sport from '../../../img/sport.svg'
import videoPoster from '../../../video/video-poster.png';
import ventageSportsVideo from '../../../video/VantageSportsPromo_FC2.mp4';
import play from '../../../img/play.svg';
import './CounterSection.scss';
import $ from 'jquery'

const CounterSection = () => {
   useEffect(()=>{
    $(".video-presentation video").on("click", function(e) {
        if (this.paused) {
          this.play();
          $(this)
            .parent()
            .find(".btn-play")
            .css("display", "none");
        } else {
          this.pause();
          $(this)
            .parent()
            .find(".btn-play")
            .css("display", "block");
        }
      });
   },[])
    return (
    <section className="counter-section">
      <div className="container">
        <h1 className="title">Welcome to Vantage!</h1>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text">Vantage is a marketplace where current college athletes host training sessions for
              aspiring college athletes and sell access to instructional videos.</div>
          </div>

          <div className="col-lg-9 mx-auto">
            <div className="counter-container">
              <div className="counter-content">
                <div className="icon">
                  <img src={athlete} alt="icon"/>
                </div>

                <div className="content">
                  <div className="count">59</div>
                  <div className="lbl">NCAA Athletes</div>
                </div>
              </div>

              <div className="counter-content">
                <div className="icon">
                  <img src={university} alt="icon"/>
                </div>

                <div className="content">
                  <div className="count">14</div>
                  <div className="lbl">Universities</div>
                </div>
              </div>

              <div className="counter-content">
                <div className="icon">
                  <img src={sport} alt="icon"/>
                </div>

                <div className="content">
                  <div className="count">06</div>
                  <div className="lbl">Sports</div>
                </div>
              </div>
            </div>

            
            <div className="video-presentation">
              <video id="video" width="100%" height="auto" poster={videoPoster}>
                <source src={ventageSportsVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button type="button" className="btn btn-play">
                <img src={play} className="img-fluid" alt="play icon" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
    );
};

export default CounterSection;