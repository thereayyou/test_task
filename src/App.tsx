import React, {useContext} from "react";
import "./App.css";
import {ThemeContext} from "./Context/ThemeProvider";
import {Header} from "./components/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ParticipantsController} from "./pages/Participants/Controllers/PartipantsController";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import {AboutController} from "./pages/About/controller/AboutController";
import {LoginController} from "./pages/Login/controller/LoginController";
import {ParticipantsDetailsController} from "./pages/ParticipantsDetails/controller/ParticipantDetailController";
import {PageNotFoundController} from "./pages/PageNotFound/controller/PageNotFoundController";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Header />
      <div className="App" id={theme}>
        <div className="container">
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />}
              />
              <Route path="/about/*" element={<PrivateRoute path="/about" element={<AboutController />} />} />
              <Route path="/participants/*" element={<PrivateRoute element={<ParticipantsController/>} path="/participants" />} />
              <Route path="/participants/:user_id"
                element={<PrivateRoute element={<ParticipantsDetailsController />} path={"/participants/:user_id"}/>}
              />
              <Route path="*" element={<PageNotFoundController />} />
              <Route path="/login" element={<LoginController />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
