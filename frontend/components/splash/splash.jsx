import React from "react";
import { Link } from "react-router-dom";
import {
  faSeedling,
  faPencilRuler,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WaveSvg from "./wave_svg";

const Splash = () => {
  const splashImgIdx = Math.floor(Math.random() * 10) > 1 ? 1 : 0;
  return (
    <div className="splash">
      <div className="splash-hero">
        <img src={window[`splash${splashImgIdx}`]} alt="hero-image" />
        <WaveSvg />
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
            <h2>Create the perfect portfolio</h2>
            <p>
              Create an account and upload your images to create the perfect
              portfolio for other users to see. The website was designed to
              maximize the appeal of your photos and make them easy to find.
            </p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faPencilRuler} />
            <h2>Maximize your exposure with tags</h2>
            <p>
              Add tags to your post so that other users can find the photos you
              post! Search and choose from hundreds of tags or create a new tag.
              Click on a tag to find other photos with the same tag, or use the
              search feature to find relevant posts.
            </p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faChartBar} />
            <h2>Find other photographers</h2>
            <p>
              Follow other photographers whose photos inspire you with just a
              click. Their latest post will be shown on your home page, and
              check out the Discover page to find more photographers. Click on
              their profile to see all the photos they posted.
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
};

export default Splash;
