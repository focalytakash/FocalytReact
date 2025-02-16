import React from 'react'
import FrontLayout from '../../Component/Layouts/Front/index'
import "./HomePage.css";
// src/pages/HomePage.js
const HomePage = () => {
    return (
      <FrontLayout>
        <section classNameName='mt-5 section-padding-120'>
        <div className="d-xxl-none d-xl-none d-lg-none d-md-none d-md-none d-sm-block d-block mt-5" id="hero_sm">
      <div className="home-2_hero-section section-padding-120" id="hero">
        <div className="container">
          <div className="row row--custom">
            <div className="col-xxl-auto col-lg-6 col-md-12 my-auto" data-aos-duration="1000" data-aos="fade-right"
              data-aos-delay="300">
              <div className="home-2_hero-content ">
                <div className="home-2_hero-content-text mb-0">
                  <h4>Unlock Your Future With</h4>
                  <h1 className="hero-content__title heading-xl text-white mb-0">
                    FOCALYT
                  </h1>
                </div>
              </div>
            </div>
            {/* <!-- <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-0" data-aos-duration="1000"
              data-aos="fade-left" data-aos-delay="300">
              <div className="home-2_hero-image-block py-xxl-5 py-xl-5 py-lg-5 py-md-5 py-sm-4 py-4">
                <div className="home-2_hero-image">
                  <img src="public_assets/images/newpage/index/focalyt2.gif" alt="hero image" className="img-fluid"
                    draggable="false">
                </div>
              </div>
            </div> --> */}
            <div className="col-xxl-6 col-lg-6 col-md-12 cl-sm-12 col-12 mt-0" data-aos-duration="1000"
            data-aos="fade-left" data-aos-delay="300">
              <div className="home-2_hero-image-block">
                <h2 className="tagline">
                  #Building Future Ready Minds
                </h2>
              </div>
              <div className="images home-images">
                <a href="/candidate/login">
                <img className="home_images main-home-images" src="/Assets/public_assets/images/icons/drone.png" alt="drone" class="img1"/>
                </a>
                <a href="/candidate/login">
                <img className="home_images main-home-images" src="/Assets/public_assets/images/icons/ai.png" alt="ai" class="img1"/>
                </a>
                <a href="/candidate/login">
                <img className="home_images main-home-images" src="/Assets/public_assets/images/icons/robotic.png" alt="robotic" class="img1"/>
                </a>
                <a href="/candidate/login">
                <img className="home_images main-home-images" src="/Assets/public_assets/images/icons/iot.png" alt="iot" class="img1"/>
                </a>
                <a href="/candidate/login">
                <img className="home_images main-home-images" src="/Assets/public_assets/images/icons/ar_vr.png" alt="ar_vr" class="img1"/>
                </a>                
              </div>
            </div>
            <div className="col-xxl-auto col-lg-6 col-md-12 my-auto" data-aos-duration="1000" data-aos="fade-right"
              data-aos-delay="300">
              {/* <!-- <div className="border_cta">
                <p className="text-white">Job Discovery&nbsp;&nbsp;|&nbsp;&nbsp;Skilling and
                  Upskilling&nbsp;&nbsp;|&nbsp;&nbsp;Loans &amp; Advances</p>
              </div> --> */}
              <div className="pt-4 last_cta">
                <h3 className="color-pink fw-bolder">ALL IN ONE PLACE!</h3>
              </div>
            </div>
            {/* <!-- CTA's --> */}
            <div
              className="col-xxl-12 col-xl-12 col-md-12 col-sm-12 col-12 mx-auto mt-xxl-5 mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-3">
              <div className="row justify-content-around" id="features_cta">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center mb-sm-3 mb-3 cta_cols" data-aos-duration="1000" data-aos="fade-right"
                data-aos-delay="300">
                  <a href="/joblisting">
                    <figure className="figure">
                      <img className="Sirv image-main" src="/Assets/public_assets/images/newpage/index/job_search.png"
                        data-src="/Assets/public_assets/images/newpage/index/job_search.png"/>
                      <img className="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/job_search_v.png" src="/Assets/public_assets/images/newpage/index/job_search_v.png"/>
                    </figure>
                  </a>
                  <h4 className="head">Future Technology Jobs</h4>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center mb-sm-3 mb-3 cta_cols" data-aos-duration="1000" data-aos="fade-right"
                data-aos-delay="400">
                  <a href="/courses">
                    <figure className="figure">
                      <img className="Sirv image-main" src="/Assets/public_assets/images/newpage/index/skill_course.png"
                        data-src="/Assets/public_assets/images/newpage/index/skill_course.png"/>
                      <img className="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/skill_course_v.png" src="/Assets/public_assets/images/newpage/index/skill_course_v.png"/>
                    </figure>
                    <h4 className="head">Future Technology Courses</h4>
                  </a>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center mb-sm-3 mb-3 cta_cols" data-aos-duration="1000" data-aos="fade-right"
                data-aos-delay="500">
                  <a href="/labs">
                    <figure className="figure">
                      <img className="Sisrv image-main" src="/Assets/public_assets/images/newpage/index/Future Technology Labs.png"
                        data-src="/Assets/public_assets/images/newpage/index/Future Technology Labs.png"/>
                      <img className="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/Future Technology Labs.png"/>
                    </figure>
                    <h4 className="head">Future Technology Labs</h4>
                  </a>
                </div>
                {/* <!-- <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center mb-sm-3 mb-3 cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newpage/index/job_safety.png" data-src="public_assets/images/newpage/index/job_safety.png">
                    <img className="Sirv image-hover" data-src="public_assets/images/newpage/index/job_safety_v.png">
                  </figure>
                  <h4 className="head">Loans &amp; Advances</h4>
                </div> --> */}
              </div>
            </div>
            {/* <!-- END --> */}
          </div>
          {/* <!-- <div className="row row--custom pt-xl-5 pt-lg-5 pt-md-1 pt-sm-1 pt-1 mt-xl-1 mt-lg-5 mt-md-1 mt-sm-1 mt-1">
            <div
              className="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center pb-xl-2 pb-lg-3 pb-md-3 pb-sm-3 pb-3">
              <h2 className="text-uppercase primary-gradient fw-bold">Our Industrial Partners</h2>
            </div>
            <div className="center slider mt-0">
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/partner.svg">
                <h5>Get a Job in Barbeque Nation</h5>
                <a data-bs-toggle="modal" data-bs-target="#nationModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/partner2.png">
                <h5>Get a Job in Haldiram's</h5>
                <a  data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/partner3.png">
                <h5>Get a Job in Lemon Tree</h5>
                <a data-bs-toggle="modal" data-bs-target="#lemonModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/partner4.png">
                <h5>Get a Job in Radisson</h5>
                <a data-bs-toggle="modal" data-bs-target="#radissonModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/partner5.png"/>
                <h5>Get a Job in Taco Bell</h5>
                <a data-bs-toggle="modal" data-bs-target="#tacoModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div className="partner_col">
                <img src="public_assets/images/newpage/index/country.png"/>
                <h5>Get a Job in Country Inn</h5>
                <a data-bs-toggle="modal" data-bs-target="#countryModal" href="javascriptvoid();">Know More ></a>
              </div>

            </div>
          </div> --> */}
<div id="mobile-new">
  <div className="row row--custom pt-xl-2 pt-lg-5 pt-md-1 pt-sm-1 pt-1 mt-xl-1  mt-lg-5 mt-md-1 mt-sm-1 mt-1">
    <div
      className="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center pb-xl-2 pb-lg-3 pb-md-3 pb-sm-3 pb-3">
      <h2 className="text-capitalize primary-gradient fw-bold">Future Technology Areas</h2>
    </div>
    <div className="center slider mt-0 ">
      <a href="/candidate/login" className="mobile-tech-area">
        <div className="partner_col tech_area_img">
          <img src="/Assets/public_assets/images/ai.png"/>
          <h5>Artificial Intelligence</h5>
          {/* <!-- <a data-bs-toggle="modal" data-bs-target="#nationModal" href="javascriptvoid();">Know More ></a> --> */}
        </div>
      </a>
      
      {/* <!-- <div className="partner_col">
        <img src="public_assets/images/newpage/index/partner2.png"/>
        <h5>Get a Job in Haldiram's</h5>
        <a  data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascriptvoid();">Know More ></a>
      </div> --> */}
      <a href="/candidate/login" className="mobile-tech-area">
        <div className="partner_col tech_area_img">
          <img src="/Assets/public_assets/images/ar_vr.png"/>
          <h5>Virtual Reality & Augmented Reality</h5>
          {/* <!-- <a data-bs-toggle="modal" data-bs-target="#lemonModal" href="javascriptvoid();">Know More ></a> --> */}
        </div>
      </a>
      <a href="/candidate/login" className="mobile-tech-area">
        <div className="partner_col tech_area_img">
          <img src="/Assets/public_assets/images/iot.png"/>
          <h5>Internet of Things</h5>
          {/* <!-- <a data-bs-toggle="modal" data-bs-target="#radissonModal" href="javascriptvoid();">Know More ></a> --> */}
        </div>
      </a>
      <a href="/candidate/login" className="mobile-tech-area">
        <div className="partner_col tech_area_img">
          <img src="/Assets/public_assets/images/robotic.png"/>
          <h5>Robotics</h5>
          {/* <!-- <a data-bs-toggle="modal" data-bs-target="#tacoModal" href="javascriptvoid();">Know More ></a> --> */}
        </div>
      </a>
      <a href="/candidate/login" className="mobile-tech-area">
        <div className="partner_col tech_area_img">
          <img src="public_assets/images/drone.png"/>
          <h5>Drone</h5>
          {/* <!-- <a data-bs-toggle="modal" data-bs-target="#countryModal" href="javascriptvoid();">Know More ></a> --> */}
        </div>
      </a>
    </div>
  </div>
</div>
          
        </div>
      </div>
    </div>
        </section>

{/* main page display on web for large screens  */}
<section class="d-xxl-block d-xl-block d-lg-block d-md-block d-md-block d-sm-none d-none">
      <div class="home-2_hero-section section-padding-120 mt-5" id="hero">
        <div class="container">
          <div class="row row--custom">
            <div class="col-xxl-6 col-lg-6 col-md-12 col-xs-8 col-10" data-aos-duration="1000" data-aos="fade-left"
              data-aos-delay="300">
              {/* <!-- <div class="home-2_hero-image-block">
                <div class="home-2_hero-image">
                  <img src="public_assets/images/newpage/index/focalyt2.gif" alt="hero image" class="img-fluid"
                    draggable="false"/>
                </div>
              </div> --> */}
              <div class="home-2_hero-image-block">
                <h2 class="tagline">
                  #Building Future Ready Minds
                </h2>
              </div>
              <div class="images">
                <img src="/Assets/public_assets/images/icons/drone.png" alt="drone" class="img1"/>
                <img src="/Assets/public_assets/images/icons/ai.png" alt="ai" class="img1"/>
                <img src="/Assets/public_assets/images/icons/robotic.png" alt="robotic" class="img1"/>
                <img src="/Assets/public_assets/images/icons/iot.png" alt="iot" class="img1"/>
                <img src="/Assets/public_assets/images/icons/ar_vr.png" alt="ar vr" class="img1"/>
              </div>
              </div>
              
              <div class="col-xxl-auto col-lg-6 col-md-12 my-auto" data-aos-duration="1000" data-aos="fade-right"
              data-aos-delay="300">
              <div class="home-2_hero-content mt-5">
                <div class="home-2_hero-content-text">
                  <h4>Unlock Your Future With</h4>
                  <h1 class="hero-content__title heading-xl text-white mb-0">
                    FOCALYT
                  </h1>
                </div>
              </div>
              <div class="border_cta">
                <p class="text-white">Job Discovery&nbsp;&nbsp;|&nbsp;&nbsp;Skilling and
                  Upskilling</p>
              </div>
              <div class="pt-4 last_cta">
                <h3 class="color-pink fw-bolder">ALL IN ONE PLACE!</h3>
              </div>
              <div class="col-xxl-12 mx-auto mt-xxl-5 mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-3">
                <div class="row justify-content-start" id="features_cta">
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-center mb-sm-3 mb-3 cta_cols">
                    <a href="/joblisting" target="_blank">
                      <figure class="figure">
                        <img class="Sirv image-main" src="/Assets/public_assets/images/newpage/index/job_search.png"
                          data-src="/Assets/public_assets/images/newpage/index/job_search.png"/>
                        <img class="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/job_search_v.png" src="/Assets/public_assets/images/newpage/index/job_search_v.png"/>
                      </figure>
                      <h4 class="head">Future Technology Jobs</h4>
                    </a>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-center mb-sm-3 mb-3 cta_cols">
                    <a href="/courses">
                      <figure className="figure">
                        <img className="Sirv image-main" src="/Assets/public_assets/images/newpage/index/skill_course.png"
                          data-src="/Assets/public_assets/images/newpage/index/skill_course.png"/>
                        <img className="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/skill_course_v.png" src="/Assets/public_assets/images/newpage/index/skill_course_v.png"/>
                      </figure>
                      <h4 class="head">Future Technology Courses</h4>
                    </a>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-center mb-sm-3 mb-3 cta_cols">
                    <a href="/labs">
                      <figure class="figure">
                        <img class="Sirv image-main" src="/Assets/public_assets/images/newpage/index/Future Technology Labs.png"
                          data-src="/Assets/public_assets/images/newpage/index/Future Technology Labs.png"/>
                        <img class="Sirv image-hover" data-src="/Assets/public_assets/images/newpage/index/Future Technology Labs_v.png" src="/Assets/public_assets/images/newpage/index/Future Technology Labs_v.png"/>
                      </figure>
                      <h4 class="head">Future Technology Labs</h4>
                    </a>
                  </div>
                  {/* <!-- <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-center mb-sm-3 mb-3 cta_cols">
                    <figure class="figure">
                      <img class="Sirv image-main" src="public_assets/images/newpage/index/job_safety.png" data-src="public_assets/images/newpage/index/job_safety.png">
                      <img class="Sirv image-hover" data-src="public_assets/images/newpage/index/job_safety_v.png">
                    </figure>
                    <h4 class="head">Loans &amp; Advances</h4>
                    <h4 class="head">Loans &amp; Advances</h4>
                  </div> --> */}
                </div>
              </div>
            </div>
            </div>
            </div>
            
            {/* <!-- CTA's -->
            <!-- END --> */}
          </div>
          <div class="container">
{/* <!-- <div class="row row--custom pt-xl-2 pt-lg-5 pt-md-1 pt-sm-1 pt-1 mt-xl-1  mt-lg-5 mt-md-1 mt-sm-1 mt-1">
            <div
              class="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center pb-xl-2 pb-lg-3 pb-md-3 pb-sm-3 pb-3">
              <h2 class="text-uppercase primary-gradient fw-bold">Our Industrial Partners</h2>
            </div>
            <div class="center slider mt-0 ">
              <div class="partner_col">
                <img src="public_assets/images/newpage/index/partner.svg">
                <h5>Get a Job in Barbeque Nation</h5>
                <a data-bs-toggle="modal" data-bs-target="#nationModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div class="partner_col">
                <img src="public_assets/images/newpage/index/partner2.png">
                <h5>Get a Job in Haldiram's</h5>
                <a  data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div class="partner_col">
                <img src="public_assets/images/newpage/index/partner3.png">
                <h5>Get a Job in Lemon Tree</h5>
                <a data-bs-toggle="modal" data-bs-target="#lemonModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div class="partner_col">
                <img src="/Assetspublic_assets/images/newpage/index/partner4.png">
                <h5>Get a Job in Radisson</h5>
                <a data-bs-toggle="modal" data-bs-target="#radissonModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div class="partner_col">
                <img src="/Assetspublic_assets/images/newpage/index/partner5.png">
                <h5>Get a Job in Taco Bell</h5>
                <a data-bs-toggle="modal" data-bs-target="#tacoModal" href="javascriptvoid();">Know More ></a>
              </div>
              <div class="partner_col">
                <img src="/Assetspublic_assets/images/newpage/index/country.png">
                <h5>Get a Job in Country Inn</h5>
                <a data-bs-toggle="modal" data-bs-target="#countryModal" href="javascriptvoid();">Know More ></a>
              </div>
            </div>
          </div> --> */}
          <div id="new">
            <div class="row row--custom pt-xl-2 pt-lg-5 pt-md-1 pt-sm-1 pt-1 mt-xl-1  mt-lg-5 mt-md-1 mt-sm-1 mt-1">
              <div
                class="col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center pb-xl-2 pb-lg-3 pb-md-3 pb-sm-3 pb-3">
                <h2 class="text-capitalize primary-gradient fw-bold">Future Technology Areas</h2>
              </div>
              <div class="center slider mt-0 ">
                {/* <!-- <a href="/candidate/login" class="mobile-tech-area"></a> --> */}
                <div class="partner_col tech_area_img">
                  <img src="/Assetspublic_assets/images/ai.png"/>
                  <h5>Artificial Intelligence</h5>
                  {/* <!-- <a data-bs-toggle="modal" data-bs-target="#nationModal" href="javascriptvoid();">Know More ></a> --> */}
                </div>
                {/* <!-- <div class="partner_col">
                  <img src="public_assets/images/newpage/index/partner2.png">
                  <h5>Get a Job in Haldiram's</h5>
                  <a  data-bs-toggle="modal" data-bs-target="#exampleModal" href="javascriptvoid();">Know More ></a>
                </div> --> */}
                {/* <!-- <a href="/candidate/login" class="mobile-tech-area"></a> --> */}

                <div class="partner_col tech_area_img">
                  <img src="/Assetspublic_assets/images/ar_vr.png"/>
                  <h5>Virtual Reality & Augmented Reality</h5>
                  {/* <!-- <a data-bs-toggle="modal" data-bs-target="#lemonModal" href="javascriptvoid();">Know More ></a> --> */}
                </div>
                {/* <!-- <a href="/candidate/login" class="mobile-tech-area"></a> --> */}

                <div class="partner_col tech_area_img">
                  <img src="/Assetspublic_assets/images/iot.png"/>
                  <h5>Internet of Things</h5>
                  {/* <!-- <a data-bs-toggle="modal" data-bs-target="#radissonModal" href="javascriptvoid();">Know More ></a> --> */}
                </div>
                {/* <!-- <a href="/candidate/login" class="mobile-tech-area"></a> --> */}

                <div class="partner_col tech_area_img">
                  <img src="/Assetspublic_assets/images/robotic.png"/>
                  <h5>Robotics</h5>
                  {/* <!-- <a data-bs-toggle="modal" data-bs-target="#tacoModal" href="javascriptvoid();">Know More ></a> --> */}
                </div>
                {/* <!-- <a href="/candidate/login" class="mobile-tech-area"></a> --> */}

                <div class="partner_col tech_area_img">
                  <img src="/Assetspublic_assets/images/drone.png"/>
                  <h5>Drone</h5>
                  {/* <!-- <a data-bs-toggle="modal" data-bs-target="#countryModal" href="javascriptvoid();">Know More ></a> --> */}
                </div>
              </div>
            </div>
          </div>
          
          </div>
        
    </section>

      </FrontLayout>
    );
  };

export default HomePage
