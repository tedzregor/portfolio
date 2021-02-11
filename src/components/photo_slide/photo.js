import React from 'react';
import Swiper from 'react-id-swiper';
import './photo.css'
import {imgs as img} from "../../utils/utils"

  const imageVal = img;

  const Photos = () => {
    const params = {
        effect: 'coverflow',
        slidesPerView: 3,
        spaceBetween: 100,
        freeMode: true,
        autoplay: {
             delay: 3500,
             disableOnInteraction: false
           },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        zoom: true,
     
      } 

    return (
        <div className='div-pad'> 
            <Swiper {...params}>
                {imageVal.map((value,index) => (
                        <div key={index}
                        className="swiper-slide" 
                        style=
                            {{
                                backgroundImage:`url(${value.image})`,
                                backgroundRepeat:"no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "Contain",
                            }}
                        >
                        </div>
                    ))
                }
            </Swiper>
        </div>
    )

    
    /* // Static 
    return (
    <div className='div-pad'>
      <Swiper {...params}>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${img[0].image})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain",
                }}
        >
        </div>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${sit_dinner})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain"
                }}
        >
        </div>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${sit_id})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain"
                }}
        >
        </div>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${reekoh})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain"
                }}
        >
        </div>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${cert_emp})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain"
                }}
        >
        </div>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${my_icafe})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "Contain"
                }}
        >
        </div>
  </Swiper>
  </div>
    )
    */
  };
  export default Photos;