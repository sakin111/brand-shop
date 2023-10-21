import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Brand = () => {

    useEffect(() => {
        AOS.init({
          offset: 200, 
          duration: 800, 
        });
      }, []);



    return (
        <div className='px-16'>
            
            <div data-aos="fade-up"><h2 className='text-6xl font-custom rancho mb-16 text-stone-500 text-shadow-md text-center' >Grow Your Fashion Sense With The Brand</h2></div>

            <AwesomeSlider>
                <div data-src="https://i.ibb.co/LktTQNv/75754fae-4198-41e3-8d69-92e1164de860.jpg" />
                <div data-src="https://i.ibb.co/L6BxTRN/e3f4fb13-dfc7-45cf-859e-590080b00477.jpg" />
                <div data-src="https://i.ibb.co/7CgjJpw/1c9c2b76-471c-40ff-828a-def663f24966.jpg" />
                <div data-src="https://i.ibb.co/2PySMdq/aed94c6d-38dc-4431-a87f-fd1c3045c1e6.jpg" />
                <div data-src="https://i.ibb.co/QXcRBzF/fbb9692c-d97f-4d0e-a161-61342cce7175.jpg" />
                <div data-src="https://i.ibb.co/bg93xwK/01459953-13d8-456b-b3dc-03991a517ce1.jpg" />
            </AwesomeSlider>
        </div>
    );
};

export default Brand;
