import Header from "../about/Header";
import Background from "../Components/Background";
import SideIcons from "../Components/SideIcons";
import Title from "../Components/Title";

const Home=()=>
{
    return(
        <div className="bg-dark-background text-white font-sans">
            <Header />
            <SideIcons />
            <Title />
            <Background />
        </div>
    );
}

export default Home;