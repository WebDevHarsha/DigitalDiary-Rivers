import React, { useState } from "react";
import "./App.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    journey: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/submitFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center m-5 ">
        <label className="text-xl mx-2 " htmlFor="date">
          Date:
        </label>
        <input
          className="border-4 bg-amber-500 rounded-lg text-amber-900 font-bold"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="flex justify-center">
        <label className="text-xl mx-2" htmlFor="journey">
          Tell me about your today's journey...
        </label>
        

        </div>
        <br />
        <div className="flex justify-center">
          <textarea
            className="border-4 h-60 w-3/4 m-10 text-xl text-yellow-700"
            type="text"
            id="journey"
            name="journey"
            value={formData.journey}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="border-4 h-12 w-24 rounded-2xl m-10 bg-amber-400 hover:bg-amber-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-dvh ">
      <div className="bg-gradient-to-r from-amber-300 to-amber-600 h-auto w-5/6 border-8 rounded-xl border-orange-600 ra">
        <div className="flex justify-center">
          <h1 className="font-extrabold text-4xl font-serif ">
            My Personal Diary: RIVERS
          </h1>
        </div>
        <MyForm />
      </div>
    </div>
  );
};

export default App;
