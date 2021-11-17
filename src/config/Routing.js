import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import ListUsers from "../pages/ListUsers"

export default function Routing() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/ListUsers" element={<ListUsers />}/>
                </Routes>
            </Router>
            
        </div>
    )
}
