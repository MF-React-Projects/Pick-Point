import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} />
            </Routes>
        </div>
    );
}

export default App;
