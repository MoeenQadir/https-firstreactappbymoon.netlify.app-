import './App.css';
import {Routes, Route} from "react-router-dom";
import Nav from './components/Nav'
import Hero from "./components/Hero";
function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Hero/>}></Route>
            </Routes>
            {/*<Routes>*/}
            {/*<Route path={"/"} element={<Nav/>}></Route>*/}
            {/*<Route path={"/Nav"} element={<Hero/>}></Route>*/}
            {/*<Route path={"/Hero"} element={<Team/>}></Route>*/}
            {/*<Route path={"/Team"} element={<Services/>}></Route>*/}
            {/*<Route path={"/Services"} element={<Footer/>}></Route>*/}
            {/*<Route path={"/Footer"} element={<Footer/>}></Route>*/}
            {/*/!*<Cards/>*!/*/}
            {/*</Routes>*/}
        </>

    );
}

export default App;
