import Banner from "../Components/Banner";
import TouristSport from "../Components/TouristSport";

const Home = () => {
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div className="mt-5">
            <TouristSport></TouristSport>
            </div>
        </div>
    );
};

export default Home;