import { useState } from "react";
import type { FormEvent } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");
 

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contactrequest", {
      method: "POST",
      body: formData,
    });

    console.log("made it here");
    const data = await response.json();
    console.log(data);
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    
    if (data.message) {
      setResponseMessage(data.message);
     }

     if(data.status == 200) {
      formData.set('firstname', '')
     }

  }

  return (
   
    <div className="bg-black w-full max-w-xs text-start mb-4 my-8">
    <form className="bg-green text-white shadow-md rounded px-8 pt-6 pb-8 min-w-min" onSubmit={submit}>
    {responseMessage && <p>{responseMessage}</p>}
      <label className="block text-lg font-bold mb-2 text-white" htmlFor="firstname">
        First Name
        <input className="shadow appearance-none  rounded w-full py-2 px-3 text-green leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="firstname" autoComplete="given-name" required />
      </label>
     
      <button className="bg-superwhite hover:bg-green text-green hover:text-white font-bold py-2 px-4 rounded  hover:border-white border-2 ">Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
    </div>
  );
}