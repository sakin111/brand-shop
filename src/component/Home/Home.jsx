import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Design from "../Design/Design";
import Footer from "../Footer/Footer";
import MyCollection from "../MyCollection/MyCollection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-[500px]">
            <Brand></Brand>
            </div>
            <Design></Design>
            <MyCollection></MyCollection>
            <Footer></Footer>
        </div>
    );
};

export default Home;