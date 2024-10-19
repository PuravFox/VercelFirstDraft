import React, { useState } from "react";

console.log("process.env.API_URL: ", process.env.REACT_APP_API_URL);

const Home = () => {
  const [thought, setThought] = useState("none");

  const fetchThought = async () => {
    try {
      // Construct the fetch URL
      const apiUrl = `${process.env.REACT_APP_API_URL}/thought`;
      console.log("Fetching from URL:", apiUrl); // Log the constructed URL

      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setThought(data.thought);
    } catch (error) {
      console.error("Error fetching thought:", error);
    }
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>This is a public page, accessible to anyone.</p>
      <button
        onClick={fetchThought}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Get Thought
      </button>
      <p>{thought}</p>
    </div>
  );
};

export default Home;
