import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Design = () => {

    useEffect(() => {
        AOS.init({
          offset: 200, 
          duration: 800, 
        });
      }, []);


    return (


        <div  className="flex justify-between items-center mt-64 bg-gray-200"
        >
            <div data-aos="fade-left">
                <img src="https://i.ibb.co/jwTmFgB/654ad030-95cd-44e3-9f59-ba29d069e639-removebg-preview-1.png" alt="" className="" />
            </div>
            <div data-aos="fade-right">
                <p className="w-[700px] h-96 text-2xl font-custom rancho text-gray-700">
                    Fashion is a form of self-expression through clothing, accessories, and personal style. It encompasses the prevailing trends, styles, and aesthetics that individuals use to showcase their identity, cultural influences, and societal affiliations. Fashion is not only about clothing but also about how one presents themselves, and it often reflects the ever-evolving tastes and values of a given era. It plays a crucial role in shaping individual and collective identities and can be influenced by art, culture, technology, and historical events. Fashion varies greatly across cultures, time periods, and personal preferences, making it a diverse and dynamic aspect of human life.
                    </p>
            </div>


        </div>
    );
};

export default Design;