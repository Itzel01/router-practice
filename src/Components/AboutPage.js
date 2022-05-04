import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";

function AboutPage(props){
    return(
        <>
            <Header title = {"Welcome to the About Page"}/>
            <Navbar/>
            <Content page = {"about"} />
        </>  
    )
}

export default AboutPage;