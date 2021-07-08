import React from 'react';

const Benefits = (benefit) => {
    const {benefitTitle,benefitDescription,benefitImg,card} = benefit.benefit;
    console.log(benefit.benefit);
    return (
        <div className={`benefit-card ${benefit.benefit.cardActive}`}>
        <div className="icon-holder">
            <img src={benefitImg}alt="icon" />
        </div>

        <div className="card-content">
            <h1 className="title-text">{benefitTitle}</h1>
            <div className="text">{benefitDescription}</div>
        </div>
    </div>
    );
};

export default Benefits;