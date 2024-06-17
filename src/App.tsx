import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";

import image from "./assets/images/illustration-sign-up-desktop.svg";
import { SuccessPop } from "./components/SuccessPop/SuccessPop";

function App() {
  const [emailProvided, setEmailProvided] = useState<Boolean>(false);

  return (
    <div className="flex items-center justify-center h-svh">
      {emailProvided ? (
        <SuccessPop isEmailSet={setEmailProvided}/>
      ) : (
        <div className="flex items-center justify-center bg-white rounded-3xl p-6 border-black border-2">
          <Form isEmailSet={setEmailProvided} />
          <img src={image} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
