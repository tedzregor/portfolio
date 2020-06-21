import React from 'react';
import Swiper from 'react-id-swiper';
import './photo.css'
import sit_family from "../../assets/images/sit_family.jpg"
import sit_dinner from "../../assets/images/sit_dinner.jpg"
import sit_id from "../../assets/images/sit_id.jpg"
import reekoh from "../../assets/images/reekoh.jpg"
import cert_emp from "../../assets/images/cert.png"
import my_icafe from "../../assets/images/my_icafe.jpg"

  const Photos = () => {
    const params = {
        effect: 'coverflow',
        slidesPerView: 3,
        spaceBetween: 100,
        freeMode: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        //   },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      } 
    
    /* 
    import { imgs } from "../../utils/utils"
    I still have issue with dynamic Swiper, Temporarily will do it static
    return  <Swiper {...params} > {imgs.map((img, index) => {
        return (
            <div key={index}
                className="swiper-slide" 
                style=
                    {{
                        backgroundImage:`url(${img.image})`,
                        backgroundRepeat:"no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "Contain",
                    }}
            >
            </div>
        )
        })
    }
    </Swiper>
    */
    
    // Static 
    return (
    <div className='div-pad'>
      <Swiper {...params}>
        <div 
            className="swiper-slide" 
            style=
                {{
                    backgroundImage:`url(${sit_family})`,
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
  };
  export default Photos;