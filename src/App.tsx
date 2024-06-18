import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";

import imageDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import imageMobile from "./assets/images/illustration-sign-up-mobile.svg";
import { SuccessPop } from "./components/SuccessPop/SuccessPop";

function App() {
  const [emailProvided, setEmailProvided] = useState<Boolean>(false);

  return (
    <div className="flex items-center justify-center h-svh">
      {emailProvided ? (
        <SuccessPop isEmailSet={setEmailProvided}/>
      ) : (
        <div className="flex flex-col-reverse sm:flex-row sm:space-x-0 sm:p-6 items-center justify-center bg-white sm:rounded-3xl sm:border-black sm:border-2 sm:overflow-hidden h-full sm:h-auto">
          <Form isEmailSet={setEmailProvided} />
          <img className="w-auto sm:block hidden" src={imageDesktop} alt="" />
          <img className="w-full -mt-6 block sm:hidden " src={imageMobile} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
