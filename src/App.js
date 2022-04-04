import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/reviews'} element={<ReviewPage/>} />
                <Route path={'/dashboard'} element={<Dashboard/>} />
                <Route path={'/blogs'} element='' />
                <Route path={'/about'} element='' />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default App;
