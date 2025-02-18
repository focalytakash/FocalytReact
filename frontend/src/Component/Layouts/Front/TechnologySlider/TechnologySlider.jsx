import React from 'react';
import Slider from 'react-slick';
import "./TechnologySlider.css"
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechnologySlider = () => {
  const technologyItems = [
    {
      image: '/Assets/public_assets/images/iot.png',
      title: 'Internet of Things'
    },
    {
      image: '/Assets/public_assets/images/robotic.png',
      title: 'Robotics'
    },
    {
      image: '/Assets/public_assets/images/drone.png',
      title: 'Drone'
    },
    {
      image: '/Assets/public_assets/images/ai.png',
      title: 'Artificial Intelligence'
    }
  ];

  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="btn rounded-circle position-absolute start-0 top-50 translate-middle-y custom-arrow"
      style={{ zIndex: 1, marginLeft: '-25px', background: '#333' }}
      aria-label="Previous slide"
    >
      {/* <ChevronLeft size={24} color="white" /> */}
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="btn rounded-circle position-absolute end-0 top-50 translate-middle-y custom-arrow"
      style={{ zIndex: 1, marginRight: '-25px', background: '#333' }}
      aria-label="Next slide"
    >
      {/* <ChevronRight size={24} color="white" /> */}
    </button>
  );

  const settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    dotsClass: 'slick-dots position-relative mt-4',
    appendDots: dots => (
      <div id="tech-slider-dots">
        {dots}
      </div>
    )
  };

  return (
    <div className="py-5" style={{ background: '#1a1a1a' }}>
      <div className="container">
        <h2 className="text-center text-capitalize primary-gradient fw-bold animate">
          Future Technology Areas
        </h2>
        <div className="position-relative px-4">
          <Slider {...settings}>
            {technologyItems.map((item, index) => (
              <div key={index} className="px-3">
                <div className="card h-100 text-center border-0" style={{ background: 'white', borderRadius: '10px' }}>
                  <div className="card-body ">
                    <div className="mb-3 mx-auto d-flex align-items-center justify-content-center" 
                         style={{ height: '150px' }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="img-fluid transition"
                        style={{ 
                          maxHeight: '100px',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    </div>
                    <h5 className="card-title" style={{ color: '#333' }}>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TechnologySlider;