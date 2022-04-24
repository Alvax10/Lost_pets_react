import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import { AppRoutes } from "./router/router";
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <Suspense fallback="">
            <React.StrictMode>
                <RecoilRoot>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </RecoilRoot>
            </React.StrictMode>
        </Suspense>
    );
}

ReactDOM.render(<App />
,document.getElementById('root'));