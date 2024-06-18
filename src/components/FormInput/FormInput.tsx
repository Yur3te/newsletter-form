import React, { useState } from "react";

export const FormInput: React.FC<FormProps> = ({email, setEmail}) => {
  const [emailTmp, setEmailTmp] = useState("");
  const [emailCorrect, setEmailCorrect] = useState<boolean>(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    if (emailRegex.test(emailTmp)) {
      setEmailCorrect(true);
      setEmail(emailTmp);
    } else {
      setEmailCorrect(false);
      setEmail("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailTmp(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-auto pt-6">
      <div className="flex justify-between">
        <label htmlFor="email" className="text-sm font-bold mb-2">Email address</label>
        {emailCorrect ? <></> : <label className="text-red-500 text-sm font-semibold mb-2">Valid email required </label> }
      </div>
      <input
        className={`border-2 rounded-md p-4 ${emailCorrect ? 'border-black outline-black' : "border-red-500 outline-red-500 bg-red-100" }`}
        id="email"
        type="text"
        placeholder="email@company.com"
        value={emailTmp}
        onChange={handleChange}
      />
      <button className="bg-blue-950 p-4 rounded-xl mt-4 text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-500">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};
