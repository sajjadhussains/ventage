import React from 'react';

const HowItWorkCard = (worksData) => {
    const {workTitle,workTitle2,workDescription,workIcon,workCard,id} = worksData.worksData;
    return (
        <div className="col-lg-6">
        <div className="how-it-card active">
          <div className="card-top">
            <div className="icon-holder">
              <img src={workIcon} alt="icon"/>
            </div>

            <div className="title">{workTitle} <br />{workTitle2}</div>
          </div>

          <div className="card-bottom">
            <div className="no">{id}</div>

            <div className="text">{workDescription}</div>
          </div>
        </div>
      </div>
    );
};

export default HowItWorkCard;