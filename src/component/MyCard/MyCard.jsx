
import { useLoaderData } from "react-router-dom";
import Cards from "../Card/Cards";



const MyCard = () => {

    const brands = useLoaderData()

   

    return (
        <div className="grid grid-cols-2 gap-3 mt-10 mx-auto">
        
            {
                brands.map(product =><Cards   
                    key={product._id}
                    product={product}
                
                ></Cards>)
            }
        </div>
    );
};

export default MyCard







