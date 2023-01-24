import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Routes, Route} from "react-router-dom";
import Nav from './components/Nav'
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <Nav/>
            <Hero/>
            <Team/>
            <Services/>
            <Footer/>
            {/*<Routes>*/}
            {/*<Route path={"/"} element={<Nav/>}></Route>*/}
            {/*<Route path={"/"} element={<Hero/>}></Route>*/}
            {/*<Route path={"/"} element={<Team/>}></Route>*/}
            {/*<Route path={"/"} element={<Services/>}></Route>*/}
            {/*<Route path={"/"} element={<Footer/>}></Route>*/}
            {/*/!*<Cards/>*!/*/}
            {/*</Routes>*/}
        </>

    );
}

export default App;
