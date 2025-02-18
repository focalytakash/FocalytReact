import React from 'react'
import "./Course.css"
function Course() {
  return (
    <>


<section className="bg_pattern py-xl-5 py-lg-5 py-md-5 py-sm-2 py-2 d-none">
  <div className="container">
      <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-11 col-11 mx-auto pb-xl-3 pb-lg-3 pb-md-3 pb-sm-1 pb-1">
              <div className="row" id="two_slect">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 px-0">
                      <div className="input-group mb-xl-3 mb-lg-3 mb-md-1 mb-sm-0 mb-0">
                          <button className="btn btn-outline-secondary" type="button"><img src="/Assets/public_assets/images/icons/location.png" className="img-fluid" draggable="false"/>
                          </button>
                          <select className="form-select city_form" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 px-0">
                      <div className="input-group mb-xl-3 mb-lg-3 mb-md-1 mb-sm-0 mb-0">
                          <button className="btn btn-outline-secondary exp" type="button">EXP</button>
                          <select className="form-select last_select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                  </div>
              </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-md-8 col-sm-8 col-11 mx-auto">
            <div className="row justify-content-around" id="features_cta">
              <ul className="d-flex justify-content-between overflow-x-auto">
                {/* <!-- <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newpage/index/job_search.png" data-src="public_assets/images/newpage/index/job_search.png">
                    <img className="Sirv image-hover" src="public_assets/images/newpage/index/job_search_v.png" data-src="public_assets/images/newpage/index/job_search_v.png">
                  </figure>
                  <h4 className="head">Job Search</h4>
                </li>
                <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newpage/index/learn_earn.png" data-src="public_assets/images/newpage/index/learn_earn.png">
                    <img className="Sirv image-hover" src="public_assets/images/newpage/index/learn_earn_v.png" data-src="public_assets/images/newpage/index/learn_earn_v.png">
                  </figure>
                  <h4 className="head">Learn &amp; Earn</h4>
                </li>
                <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newpage/index/job_safety.png" data-src="public_assets/images/newpage/index/job_safety.png">
                    <img className="Sirv image-hover" src="public_assets/images/newpage/index/job_safety_v.png" data-src="public_assets/images/newpage/index/job_safety_v.png">
                  </figure>
                  <h4 className="head">Loans &amp; Advances</h4>
                </li>
                <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newpage/index/skill_course.png" data-src="public_assets/images/newpage/index/skill_course.png">
                    <img className="Sirv image-hover" src="public_assets/images/newpage/index/skill_course_v.png" data-src="public_assets/images/newpage/index/skill_course_v.png">
                  </figure>
                  <h4 className="head">Skill Course</h4>
                </li> 
             
                 <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newjobicons/aerospace.png" data-src="public_assets/images/newjobicons/aerospace.png">
                    <img className="Sirv image-hover" src="public_assets/images/newjobicons/aerospace_v.png" data-src="public_assets/images/newjobicons/aerospace_v.png">
                  </figure>
                  <h4 className="head">Aerospace &amp;Aviation</h4>
                </li> --> */}
                <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/agriculture.png" data-src="/Assets/public_assets/images/newjobicons/agriculture.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/agriculture_v.png" data-src="/Assets/public_assets/images/newjobicons/agriculture_v.png"/>
                  </figure>
                  <h4 className="head">Agriculture</h4>
                </li>
                <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/apparel_Made_Ups_&_Home_Furnishing.png" data-src="/Assets/public_assets/images/newjobicons/apparel_Made_Ups_&_Home_Furnishing.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/apparel_Made_Ups_&_Home_Furnishing_v.png" data-src="/Assets/public_assets/images/newjobicons/apparel_Made_Ups_&_Home_Furnishing_v.png"/>
                  </figure>
                  {/* <!-- Apparel Made-Ups &  --> */}
                  <h4 className="head">Home Furnishing</h4>
                </li>
                <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/automotive.png" data-src="/Assets/public_assets/images/newjobicons/automotive.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/automotive_v.png" data-src="/Assets/public_assets/images/newjobicons/automotive_v.png"/>
                  </figure>
                  <h4 className="head">Automotive</h4>
                </li>
                 <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/beautywellness.png" data-src="/Assets/public_assets/images/newjobicons/beautywellness.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/beautywellness.png_v.png" data-src="/Assets/public_assets/images/newjobicons/beautywellness.png_v.png"/>
                  </figure>
                  <h4 className="head">Beauty  &amp;Wellness</h4>
                </li>
                {/* <!-- <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newjobicons/bfsi.png" data-src="public_assets/images/newjobicons/bfsi.png">
                    <img className="Sirv image-hover" src="public_assets/images/newjobicons/bfsi_v.png" data-src="public_assets/images/newjobicons/bfsi_v.png">
                  </figure>
                  <h4 className="head">BFSI</h4>
                </li> --> */}
                 {/* <!-- <li className="cta_cols">
                  <figure className="figure">
                    <img className="Sirv image-main" src="public_assets/images/newjobicons/capital_Goods.png" data-src="public_assets/images/newjobicons/capital_Goods.png">
                    <img className="Sirv image-hover" src="public_assets/images/newjobicons/capital_Goods_v.png" data-src="public_assets/images/newjobicons/capital_Goods_v.png">
                  </figure>
                  <h4 className="head">Capital Goods</h4>
                </li> --> */}
               <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/domestic_Workers.png" data-src="/Assets/public_assets/images/newjobicons/domestic_Workers.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/domestic_Workers_v.png" data-src="/Assets/public_assets/images/newjobicons/domestic_Workers_v.png"/>
                  </figure>
                  <h4 className="head">Domestic Workers</h4>
                </li>
                 <li className="cta_cols cta_cols_list">
                  <figure className="figure">
                    <img className="Sirv image-main" src="/Assets/public_assets/images/newjobicons/furniture_&_Fittings.png" data-src="/Assets/public_assets/images/newjobicons/furniture_&_Fittings.png"/>
                    <img className="Sirv image-hover" src="/Assets/public_assets/images/newjobicons/furniture_&_Fittings_v.png" data-src="/Assets/public_assets/images/newjobicons/furniture_&_Fittings_v.png"/>
                  </figure>
                  <h4 className="head">Furniture &Fittings</h4>
                </li>
               </ul>
            </div>
           
        </div>
    </div>
    </div>
  </section>

  {/* <!-- start --> */}
<section className="jobs section-padding-120 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto mt-xxl-5 mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-3 ">
          <div className="row my-xl-5 my-lg-5 my-md-3 my-sm-3 my-3">
            <h1 className="text-center text-uppercase jobs-heading pb-4">Matching courses Near You</h1>
            
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4 card-padd">
                <div className="card bg-dark courseCard">
                  <div className="bg-img">
                    <a href="#"  data-bs-target="#videoModal" data-bs-toggle="modal" data-bs-link=""
                                                                    className="pointer img-fluid"><img src="" className="digi" alt=""/>
                    <img src="/Assets/public_assets/images/newjoblisting/play.svg" alt="" className="group1"/></a>
                    {/* <!-- <div id="base">
                      <p className="text-center p-0 match_card fw-bolder">Now At</p>
                      <p className="text-center p-0 match_del fw-bold"><del className="text"></del></p>
                      <p className="text-center p-0 match_final fw-bold"></p>
                    </div> --> */}
                    <div className="flag">
                    </div>
                    {/* <!-- <img src="public_assets/images/newjoblisting/Group2.png" className="group2" alt=""> --> */}
                    <div className="right_obj shadow"></div>
                  </div>
                  <div className="card-body px-0 pb-0">
                    <h4 className="text-center text-white fw-bolder mb-2 mx-auto text-capitalize ellipsis" title="<%=course.name%>"></h4>
                    {/* <!-- <h5 className="fw-light mx-auto"><%=course.certifyingAgency%></h5> -->
                    <!-- <h3 className="text-center digi-price mb-0"> -->
                      <!-- <span className="c_rupee"></span>  -->
                      <!-- <span className="c_price"><del className="course">&#8377;<%=course.courseFee%></del></span> -->
                      <!-- <span className="c_rupee"></span> -->
                      <!-- <span className="c_price"><%=course.cutPrice ? course.cutPrice.toLowerCase()==='free'? course.cutPrice : '₹ ' + course.cutPrice : 'N/A' %></span>
                    </h3> -->
                    <!-- <h3 className="text-center digi-price mb-0">
                      
                    </h3> -->
                    <!-- <h2 className="text-center digi-price mb-3"> -->
                      <!-- <span className="r-price">&#8377; </span> -->
                    <!-- </h2> --> */}
                    <div className="row" id="course_height">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 mx-auto mb-2">
                          <div className="row">
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                  <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 my-auto">
                                          <figure className="text-end">
                                              <img src="/Assets/public_assets/images/icons/eligibility.png" className="img-fluid p-0" draggable="false"/>
                                          </figure>
                                      </div>
                                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 text-white courses_features ps-0">
                                          <p className="mb-0 text-white">Eligibility</p>
                                          <p className="mb-0 text-white"><small className="sub_head"></small></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                  <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 my-auto">
                                          <figure className="text-end">
                                              <img src="/Assets/public_assets/images/icons/duration.png" className="img-fluid p-0" draggable="false"/>
                                          </figure>
                                      </div>
                                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 text-white courses_features ps-0">
                                          <p className="mb-0 text-white">Duration</p>
                                          <p className="mb-0 text-white"><small className="sub_head"></small></p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                  <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 my-auto">
                                          <figure className="text-end">
                                              <img src="/Assets/public_assets/images/icons/location-pin.png" className="img-fluid p-0" draggable="false"/>
                                          </figure>
                                      </div>
                                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 text-white courses_features ps-0">
                                          <p className="mb-0 text-white">Location</p>
                                          <div className="ellipsis-wrapper">
                                            <p className="mb-0 text-white para_ellipsis" title="<%= course.city ? course.city + ', ' + course.state : 'NA' %>">
                                                <small className="sub_head">
                                                 
                                                </small>
                                            </p>
                                        </div>
                                          {/* <!-- <p className="mb-0 text-white para_ellipsis"><small className="sub_head"> </small></p> --> */}
                                  
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                  <div className="row">
                                      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 my-auto">
                                          <figure className="text-end">
                                              <img src="/Assets/public_assets/images/icons/job-mode.png" className="img-fluid p-0" draggable="false"/>
                                          </figure>
                                      </div>
                                      <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 text-white courses_features ps-0">
                                          <p className="mb-0 text-white">Mode</p>
                                          <p className="mb-0 text-white"><small className="sub_head"></small></p>
                                      </div>
                                  </div>
                              </div>
                              {/* <!-- <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2">
                                <div className="row">
                                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mb-2">
                                    <figure className="course_star">
                                      <img src="public_assets/images/jobicons/review_five.png" alt=""/>
                                    </figure>
                                  </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-auto text-center">
                                        <p className="text-white">5 Out of 5</p>
                                    </div>
                                </div>
                            </div> --> */}
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-2 text-center">
                              <div className="row">
                                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 my-auto">
                                      <p className="text-white">Last Date for apply</p>
                                  </div>
                                  <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 text-white courses_features ps-0">
                                      <p className="color-yellow fw-bold">
                                      {/* <%=course.lastDateForApply? moment(course.lastDateForApply).utcOffset("+05:30").format('MMM DD YYYY'): 'NA'%> */}
                                      </p> 
                                      {/* <!-- <p className="mb-0 text-white">Mode</p>
                                                                  <p className="mb-0 text-white"><small className="sub_head">(Blended)</small></p> --> */}
                                  </div>
                              </div>
                          </div>

                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2 text-center">
                                <a className="btn cta-callnow btn-bg-color" href="/candidate/login?returnUrl=/candidate/course">Apply Now</a>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-2 text-center">
                              <a href="https://wa.me/918699017301?text=hi" className="btn cta-callnow">Chat Now</a>
                          </div>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-xxl-12 col-12 col-lg-12 col-md-12 col-sm-12 col-12 course_card_footer">
                      <div className="row py-2">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 justify-content-center align-items-center text-center">
                          <a href="/coursedetails"><span className="learnn pt-1 text-white">Learn More</span> <img src="/Assets/public_assets/images/link.png" className="align-text-top"/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            
          </div>
        </div>
      </div>
    </div>
</section>
{/* <!-- end --> */}


{/* <!-- Modal --> */}
<div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="modal-body p-0 text-center embed-responsive">
        <video id="courseVid" controls autoplay className="video-fluid text-center">
          <source id="vodeoElement" src="" type="video/mp4" className="img-fluid video-fluid"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Course
