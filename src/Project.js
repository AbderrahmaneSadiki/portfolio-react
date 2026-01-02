import React from "react";
import "./Project.css";
// import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/mysite4.jpeg';
import Project3 from './img/mysite3.png';
import Project4 from './img/mysite2.png';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
        <div className="row">










          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development web </h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text" >marsamaroc website </h4>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">...</h4>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="project__btn">View Details</a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;
