import React, { Component } from "react";
import img3 from "../images/fspaimg.png";
import SocialMediaBarAbout from "./SocialMediaBarAbout";
import SocialMediaBar from "./SocialMediaBar";
import { Route, Link, useHistory } from "react-router-dom";

export default class Fitness extends Component {
  render() {
    return (
      <div class="home-mob-bg">
        <div class="phoneContent">
          <SocialMediaBarAbout />
          <div class="divider-bg">
            <div class="project">
              <br />
              <div class="carousel-container">
                <img class="mob" src={img3} />
              </div>
            </div>
            <br />
            <p class="mob">
              Fitness-SPA is a single-page fitness application built with an
              HTML, CSS, and JavaScript frontend and a backend API built using
              Ruby on Rails. Translated JSON responses into JavaScript model
              objects in order to create a functional application. Created DOM
              nodes and listeners to respond to user interaction. Used event
              interface methods to control form submit behavior.
            </p>
            <a href="https://github.com/Vanigami/fitness-spa">
              <button class="repo-btn">
                GitHub Repo <i class="fab fa-github"></i>
              </button>
            </a>
            <div class="mob">
              <iframe
                width="300"
                height="315"
                src="https://www.youtube.com/embed/9ThBqzOM_Qc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="deskContent">
          <SocialMediaBar />
          <div class="container-project">
            <img class="tspage" src={img3} />
          </div>
          <br />
          <br />

          <div class="about-me-card">
            <div class="about-me-card-body">
              <h5 class="card-title"> Fitness-SPA </h5>
              <p class="about-me-card">
                Fitness-SPA is a single-page fitness application built with an
                HTML, CSS, and JavaScript frontend and a backend API built using
                Ruby on Rails. Translated JSON responses into JavaScript model
                objects in order to create a functional application. Created DOM
                nodes and listeners to respond to user interaction. Used event
                interface methods to control form submit behavior.
              </p>
              <br />
              <a href="https://github.com/Vanigami/fitness-spa">
                <button class="repo-btn">
                  GitHub Repo <i class="fab fa-github"></i>
                </button>
              </a>
              <br />
              <br />
              Check out the demo video below!
              <br />
              <i class="far fa-arrow-alt-circle-down fa-4x"></i>
            </div>
          </div>
        </div>
        <div class="deskContent">
          <div class="container-sm">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9ThBqzOM_Qc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <container class="related-content">
          You May Also Like:
          <Link to="/TrainingSession"> Training Session</Link>
        </container>
        <footer>
          <button class="back-button">
            <a href="/">
              <i class="fas fa-home"></i>
            </a>
          </button>
        </footer>
      </div>
    );
  }
}
