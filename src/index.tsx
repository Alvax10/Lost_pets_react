import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { AppRoutes } from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { LoadingComp } from "./UI/LoadingComp/loadingComp";

function App() {

    return (
        // <Suspense fallback={LoadingComp}>
            <React.StrictMode>
                <RecoilRoot>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </RecoilRoot>
            </React.StrictMode>
        // </Suspense >
    );
}

ReactDOM.render(<App />
,document.getElementById('root'));