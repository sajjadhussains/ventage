import React from 'react';
import benefitImg1 from '../../../img/benefit-card-icon-1.svg';
import benefitImg2 from '../../../img/benefit-card-icon-2.svg';
import benefitImg3 from '../../../img/benefit-card-icon-3.svg';
import Benefits from '../Benefits/Benefits';
import './BenefitsInfo.scss';

const BenefitsInfo = () => {
    const benefitsData = [
        {
            benefitTitle: 'Top Talent',
            benefitDescription: 'Train with current college athletes turned private coaches',
            benefitImg: benefitImg1,
            card: 'cardFirst',
            cardActive: 'active',
            id: 1
        },
        {
            benefitTitle: 'Direct Payment',
            benefitDescription: 'Pay hardworking student athletes directly to support their educations',
            benefitImg: benefitImg2,
            card: 'cardSecond',
            // cardActive:'active',
            id: 2
        },
        {
            benefitTitle: 'Ease of Use',
            benefitDescription: 'Search by sport, college, position and rating, book easily with one-touch on our app.',
            benefitImg: benefitImg3,
            card: 'cardThird',
            // cardActive:'active',
            id: 3
        }

    ]
    return (
        <section className="benefits-section">
            <div className="container">
                <h1 className="title">Benefits</h1>
                <div className="card-container">
                    {
                        benefitsData.map(benefit => <Benefits benefit={benefit} key={benefit.id}></Benefits>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BenefitsInfo;