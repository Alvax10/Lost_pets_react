import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {

    return (
        <Suspense fallback={<h3> Cargando... </h3>}>
            <RecoilRoot>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </RecoilRoot>
        </Suspense >
    );
}

ReactDOM.render(<App />
,document.getElementById('root'));