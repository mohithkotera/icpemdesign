import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenOne from "./Components/ModuleOne/ScreenOne";
import ScreenTwo from "./Components/ModuleOne/ScreenTwo";
import ScreenThree from "./Components/ModuleOne/ScreenThree";
import ScreenFour from "./Components/ModuleOne/ScreenFour";
import ScreenFive from "./Components/ModuleOne/ScreenFive";

import M2ScreenOne from "./Components/ModuleTwo/M2ScreenOne";
import M2ScreenTwo from "./Components/ModuleTwo/M2ScreenTwo";

// import M3ScreenOne from "./Components/ModuleThree/M3ScreenOne";
// import M2ScreenTwo from "./Components/ModuleTwo/M2ScreenTwo";

import M3ScreenOne from "./Components/ModuleThree/M3ScreenOne";
import ThankMarks from "./Components/ModuleThree/ThankyouMarks";
import ThanksCerti from "./Components/ModuleThree/ThankyouCerti";
import GenerateMarks from "./Components/ModuleThree/GenerateMarks";
import GenerateCerti from "./Components/ModuleThree/GenerateCertifi";

import M4ScreenOne from "./Components/ModuleFour/M4ScreenOne";
import M4Certificate from "./Components/ModuleFour/M4Certificate";
import M4GenerateCerti from "./Components/ModuleFour/M4CertiGenerat";

import M5GenerateMarks from "./Components/ModuleFive/M5Marks";
import M5GenerateCerti from "./Components/ModuleFive/M5Certificate";
import M5ThanksCerti from "./Components/ModuleFive/M5ThankCerti";
import M5ThanksMarks from "./Components/ModuleFive/M5ThankMarks";

import M6ScreenOne from "./Components/ModuleSix/M6ScreenOne";

import M7ScreenOne from "./Components/ModuleSeven/M7ScreenOne";
import ManualDispatch from "./Components/ModuleSeven/M7ManualDispatch";
import CourierDispatch from "./Components/ModuleSeven/M7CourierDispatch";
import M7LastPage from "./Components/ModuleSeven/M7LastPage";

import PocLogin from "./Components/ModuleOne/PocLogin";
import RegInOffice from "./Components/ModuleOne/RegInOffice";
import UploadExcel from "./Components/ModuleOne/UploadExcel";
import AlertMsg from "./Components/ModuleOne/Alertmsg";
import AutoGenrate from "./Components/ModuleOne/AutoGenrate";
import Verify from "./Components/ModuleTwo/Verify";
import AssignTo from "./Components/ModuleThree/AssignTo";
import GenMarks from "./Components/ModuleThree/GenMarks";
import GenCerificate from "./Components/ModuleThree/GenCertificate";
import M3AlertMarks from "./Components/ModuleThree/AlertMarks";
import M3AlertCerti from "./Components/ModuleThree/AlertCertificate";
import M4Assign from "./Components/ModuleFour/M4Assign";
import M4PrevCertifi from "./Components/ModuleFour/M4PrevCerti";
import M4Alert from "./Components/ModuleFour/M4Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* /////////////////////Module (Part 1)///////////////// */}
        <Route path="/ScreenOne" element={<ScreenOne />} />
        <Route path="/ScreenTwo" element={<ScreenTwo />} />
        <Route path="/ScreenThree" element={<ScreenThree />} />
        <Route path="/ScreenFour" element={<ScreenFour />} />
        <Route path="/ScreenFive" element={<ScreenFive />} />

        <Route path="/M2ScreenOne" element={<M2ScreenOne />} />
        <Route path="/M2ScreenTwo" element={<M2ScreenTwo />} />

        <Route path="/M3ScreenOne" element={<M3ScreenOne />} />
        <Route path="/ThankMarks" element={<ThankMarks />} />
        <Route path="/ThanksCerti" element={<ThanksCerti />} />
        <Route path="/GenerateMarks" element={<GenerateMarks />} />
        <Route path="/GenerateCerti" element={<GenerateCerti />} />

        <Route path="/M4ScreenOne" element={<M4ScreenOne />} />
        <Route path="/M4Certificate" element={<M4Certificate />} />
        <Route path="/M4GenerateCerti" element={<M4GenerateCerti />} />

        <Route path="/M5GenerateMarks" element={<M5GenerateMarks />} />
        <Route path="/M5GenerateCerti" element={<M5GenerateCerti />} />
        <Route path="/M5ThanksCerti" element={<M5ThanksCerti />} />
        <Route path="/M5ThanksMarks" element={<M5ThanksMarks />} />

        <Route path="/M6ScreenOne" element={<M6ScreenOne />} />

        <Route path="/M7ScreenOne" element={<M7ScreenOne />} />
        <Route path="/ManualDispatch" element={<ManualDispatch />} />
        <Route path="/CourierDispatch" element={<CourierDispatch />} />
        <Route path="/M7LastPage" element={<M7LastPage />} />

        {/* /////////////////////Module (Part 2)///////////////// */}
        <Route path="/PocLogin" element={<PocLogin />} />
        <Route path="/RegInOffice" element={<RegInOffice />} />
        <Route path="/UploadExcel" element={<UploadExcel />} />
        <Route path="/AlertMsg" element={<AlertMsg />} />

        <Route path="/AutoGenrate" element={<AutoGenrate />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/AssignTo" element={<AssignTo />} />
        <Route path="/GenMarks" element={<GenMarks />} />

        <Route path="/GenCerificate" element={<GenCerificate />} />
        <Route path="/M3AlertMarks" element={<M3AlertMarks />} />
        <Route path="/M3AlertCerti" element={<M3AlertCerti />} />

        <Route path="/M4Assign" element={<M4Assign />} />
        <Route path="/M4PrevCertifi" element={<M4PrevCertifi />} />
        <Route path="/M4Alert" element={<M4Alert />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
