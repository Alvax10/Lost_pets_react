import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";
import { AppRoutes } from "./router/router";
import { BrowserRouter } from "react-router-dom";
import { css } from "./UI/LoadingComp/loadingComp";

function App() {

    return (
        <Suspense fallback={<div className={css["loading-notification"]}> 
                <h3> Cargando... </h3>
                <div className={css.preloader} ></div>
            </div> }>
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