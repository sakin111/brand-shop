
import PropTypes from 'prop-types';


const Cards = ({ product }) => {

    const { BrandName, types, price, rating, description, image } = product;


    return (
        <div>
            <div className="card w-[600px] bg-green-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-custom rancho">{BrandName}</h2>
                    <p className='font-custom rancho'>{description}</p>

                    <div className='flex gap-5'>
                        <span className='font-custom rancho'>rating : {rating}</span>
                        <span className='font-custom rancho'>price : {price}$</span>
                        <span className='font-custom rancho'>type : {types}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;


Cards.propTypes = {
    product: PropTypes.object.isRequired,
};

