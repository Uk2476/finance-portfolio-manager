import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";


const App =  () => {
    return (<div>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element= {<CreatePage />} />
            <Route path="/updateinfo" element= {<UpdateInfoPage />} />
            <Route path="/sellinginfo" element= {<SellingInfoPage />} />
            <Route path="/delete" element= {<DeletePage />} />
        </Routes>
    </div>)
}

export default App;