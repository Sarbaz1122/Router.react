
import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px"
    }}>
      <h1 style={{ fontSize: "80px", color: "red" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re trying to reach doesn’t exist.</p>
      
      <Link 
        to="/"
        style={{
          color: "white",
          backgroundColor: "#007bff",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;

