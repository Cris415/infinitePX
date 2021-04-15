import React from 'react';
import { Link } from 'react-router-dom';
import { faSeedling, faPencilRuler, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-hero">
        <img src={window.heroImg} alt="hero image flower" />
        <div className="splash-hero-copy">
          <h1>Welcome to infinitePx</h1>
          <p>
            Get inspired with incredible photos from diverse styles and genres
            around the world. We're not guided by fads—just great photography.
          </p>
          <Link className="btn btn-big" to="/signup">
            Sign Up
          </Link>
        </div>
        <div className="credits">
          <h3>Photo Credit</h3>
          <p> unsplash.com: Andrew Small</p>
        </div>
      </div>

      <div className="features">
        <h1>What makes infinitePx Different</h1>
        <div className="feature-items">
          <div className="feature-item">
            <FontAwesomeIcon icon={faSeedling} />
            <h2>Grow as a photographer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla
              nostrum minus voluptatem culpa nemo. Magni tempore debitis ea a,
              quidem, harum, non veniam eum quisquam eius iure nam odit.
            </p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faPencilRuler} />
            <h2>Build your career</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla
              nostrum minus voluptatem culpa nemo. Magni tempore debitis ea a,
              quidem, harum, non veniam eum quisquam eius iure nam odit.
            </p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faChartBar} />
            <h2>See how you're performing</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla
              nostrum minus voluptatem culpa nemo. Magni tempore debitis ea a,
              quidem, harum, non veniam eum quisquam eius iure nam odit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;