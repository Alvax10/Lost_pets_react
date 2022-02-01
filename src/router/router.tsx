import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayOut } from "../components/layOut";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { SearchResults } from "../pages/SearchResult";

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LayOut />}>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/test" element={SearchResults}></Route>
        </Routes>
    );
}

export { AppRoutes };
