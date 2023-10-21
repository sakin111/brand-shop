import { NavLink } from "react-router-dom";



const Header = () => {



    const navBar = <>

        <li className="font-custom rancho font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="ml-6 font-custom rancho font-bold"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="ml-6 font-custom rancho font-bold"><NavLink to="/myCard">My Card</NavLink></li>


    </>

    const navLog = <>

        <li className="ml-6 font-custom rancho font-bold"><NavLink to="/login">Login</NavLink></li>

    </>


    return (
        <div className="navbar bg-base-700 mx-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-full">
                        {navBar}
                    </ul>
                </div>
                <img src="https://i.ibb.co/RNp5H7g/f49dc819-35ee-4f8a-ac55-779252b800d1-removebg-preview.png" alt="" className=" w-20 h-20 " />
            </div>
            <div className="navbar-center mr-9 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end mr-9 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLog}
                </ul>
            </div>

        </div>
    );
};

export default Header;