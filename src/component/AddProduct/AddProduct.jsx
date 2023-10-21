import Swal from 'sweetalert2';
import  { useRef } from 'react';


const AddProduct = () => {

    const formRef = useRef(null);

    const handleAddBrand = e => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value
        const BrandName = form.BrandName.value
        const types = form.types.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const image = form.image.value
        const newBrand = { userName, BrandName, types, price, rating, description, image }
        console.log(newBrand)
        fetch(`http://localhost:5000/brand`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data._id) {
                    Swal.fire({
                        title: 'success',
                        text: 'successfully added to  My card',
                        icon: 'success',
                        confirmButtonText: 'okay'
                        
                    })
                }
            })

            formRef.current.reset();

    }





    return (
        <div>
            <div>
                <img src="https://i.ibb.co/X4Jn5qk/blue-pink-leaves-dyed-white-background-with-copyspace.jpg" alt="" className="w-full relative h-[700px] " />
            </div>
            <div className="bg-gray-200 bg-opacity-10 backdrop-blur-lg h-full p-6 rounded-md px-20 absolute -translate-y-full translate-x-1/2 w-1/2" >
                <h3 className="text-3xl font-bold text-center font-custom rancho text-cyan-600">Add your Product</h3>
                <form onSubmit={handleAddBrand} className="mt-11">
                    <div className=" flex mb-8">

                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="userName" placeholder="userName" className="input input-bordered w-full font-custom rancho " />
                            </label>
                        </div>


                        <div className="form-control md: w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">Brand name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="BrandName" placeholder="Brand Name" className="input input-bordered w-full font-custom rancho" />
                            </label>
                        </div>
                    </div>







                    <div className=" flex mb-8">

                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="types" placeholder="types" className="input input-bordered w-full font-custom rancho" />
                            </label>
                        </div>


                        <div className="form-control md: w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full font-custom rancho" />
                            </label>
                        </div>
                    </div>







                    <div className=" flex mb-8">

                        <div className="form-control md: w-1/2">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full font-custom rancho" />
                            </label>
                        </div>


                        <div className="form-control md: w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-custom rancho font-bold">description </span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="description" className="input input-bordered w-full font-custom rancho" />
                            </label>
                        </div>
                    </div>






                    <div className="form-control md: w-full mb-8">
                        <label className="label">
                            <span className="label-text font-custom rancho font-bold">image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full font-custom rancho" />
                        </label>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block btn-neutral" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;