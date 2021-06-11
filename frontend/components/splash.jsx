import React from 'react';
import { Link } from 'react-router-dom';
import { faSeedling, faPencilRuler, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Splash = () => {
  const splashImgIdx = Math.floor(Math.random() * 10) > 1 ? 1 : 0;
  return (
    <div className="splash">
      <div className="splash-hero">
        <img src={window[`splash${splashImgIdx}`]} alt="hero-image" />
        <div className="custom-shape-divider-bottom-1623443712">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="splash-hero-copy">
          <h1>Welcome to InfinitePx</h1>
          <p>
            Get inspired with incredible photos from diverse styles and genres
            around the world. We're not guided by fads—just great photography.
          </p>
          <Link className="btn btn-big" to="/signup">
            Sign Up
          </Link>
        </div>
        <div className="credits">
          <h3>Photo by</h3>
          <p> Cristian Reynoso</p>
        </div>
      </div>

      <div className="features">
        <h1>What makes InfinitePx Different</h1>
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

      <div className="call-to-action">
        <h1>Join our community today</h1>
        <p>
          Do you love photography? Want to constantly stay inspired and be
          surrounded by millions of like-minded creators? Then sign-up today and
          get rewarded for your love of photography.
        </p>
        <Link className="btn btn-big" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Splash;