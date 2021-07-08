import React from 'react';
import './JoinSection.scss';

const JoinSection = () => {
    return (
        <section className="join-section">
      <div className="container">
        <div className="title">Join the Waiting List Today!</div>
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="text">An initial cohort of users will get access to our exclusive private beta.</div>
          </div>

          <div className="col-lg-7 mx-auto">
            <div className="form-container">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="pills-general-sign-up-tab" data-toggle="pill"
                    href="#pills-general-sign-up" role="tab" aria-controls="pills-general-sign-up"
                    aria-selected="true">General Sign Up</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="pills-college-athlete-sign-up-tab" data-toggle="pill"
                    href="#pills-college-athlete-sign-up" role="tab" aria-controls="pills-college-athlete-sign-up"
                    aria-selected="false">College Athlete Sign Up</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-general-sign-up" role="tabpanel"
                  aria-labelledby="pills-general-sign-up-tab">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Your email address"/>
                    </div>

                    <div className="btn-container">
                      <button type="button" className="btn btn-primary">Join the Waiting List</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-college-athlete-sign-up" role="tabpanel"
                  aria-labelledby="pills-college-athlete-sign-up-tab">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name1">Name</label>
                      <input type="text" className="form-control" id="name1" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email1">Email</label>
                      <input type="email" className="form-control" id="email1" placeholder="Your email address"/>
                    </div>

                    <div className="btn-container">
                      <button type="button" className="btn btn-primary">Join the Waiting List</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default JoinSection;