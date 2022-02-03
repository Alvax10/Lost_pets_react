import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { LoadingComp } from "./UI/LoadingComp/loadingComp";

function App() {

    return (
        <Suspense fallback={LoadingComp}>
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