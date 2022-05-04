import Content from "./Content";
import Header from "./Header";
import Navbar from "./Navbar";

function MainPage(){
    return(
        <>
            <Header title = {"Welcome to the Main Page"}/>
            <Navbar/>
            <Content page = {"main"} />
        </>  
    )
    
}

export default MainPage;