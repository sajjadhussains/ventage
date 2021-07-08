import React from 'react';
import searchIcon from '../../../img/search-icon.svg';
import calendar from '../../../img/calendar.svg';
import dollar from '../../../img/dollar-symbol.svg';
import comment from '../../../img/comment.svg';
import HowItWorkCard from '../HowItWorkCard/HowItWorkCard';
import './HowItWork.scss';

const HowItWork = () => {
    const HowItWorkDatas = [
        {
            workTitle:'Find the Best Instructors and Content',
            workDescription:'Browse upcoming events or video content on the app or search and filter to find exactly what you are looking for',
            workIcon:searchIcon,
            id:'01',
            workCard:'active'
        },
        {
            workTitle:"One-Touch Scheduling",
            workDescription:'Book, cancel or modify your session  with the touch of a finger',
            workIcon:calendar,
            id:'02'
        },
        {
            workTitle:'Payment Made   Easy',
            workDescription:'Payments are handled in app, taxes and NCAA reporting requirements are calculated by student athletes',
            workIcon:dollar,
            id:'03'
        },
        {
            workTitle:'Easy Communication',
            workDescription:'Ask athletes questions, receive feedback from your training session or  request additional workout or drills',
            workIcon:comment,
            id:'04'
        }
    ]
    return (
        <section className="how-it-work-section">
        <div className="container">
          <h1 className="title">How it Works</h1>
  
          <div className="row">
              {
                  HowItWorkDatas.map(worksData=><HowItWorkCard worksData={worksData} key={worksData.id}></HowItWorkCard>)
              }
            </div>
            </div>
            </section>
    );
};

export default HowItWork;