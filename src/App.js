import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/reviews'} element='' />
                <Route path={'/dashboard'} element='' />
                <Route path={'/blogs'} element='' />
                <Route path={'/about'} element='' />
            </Routes>
        </div>
    );
}

export default App;
