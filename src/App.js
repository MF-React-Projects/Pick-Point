import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/reviews'} element={<ReviewPage/>} />
                <Route path={'/dashboard'} element={<Dashboard/>} />
                <Route path={'/about'} element={<About/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
