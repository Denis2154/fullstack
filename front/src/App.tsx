import React from "react";
import {AuthProvider} from "./component/authContext/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexPage from "./page/indexpage/indexpage";
import SignUpConfirm from "./page/signup-confirm/signupconfirm";
import Login from "./component/login/login";
import SignUp from "./page/signup/signup";
import SignIn from "./page/signin/signin";

import Recovery from "./component/recovery/recovery";
import RecoveryConfirm from "./component/recovery-confirm/recoveryConfirm";
import Balance from "./component/balance/balance";

function App({ ...children }) {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<IndexPage {...children} />} />
            <Route path="/login" element={<Login {...children}/>}/>
            <Route
              path="/signupconfirm"
              element={<SignUpConfirm {...children} />}
            />
            <Route path="/signup" element={<SignUp {...children} />} />
            <Route path="/signin" element={<SignIn {...children} />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
