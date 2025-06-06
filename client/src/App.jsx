import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Dashboard from './layouts/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;