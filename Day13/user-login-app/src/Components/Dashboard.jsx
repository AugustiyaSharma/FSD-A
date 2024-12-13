import React from "react";
import { Link } from "react-router-dom";

const DashBoard = ({ regDash }) => {
  return (
    <div>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            color: "#fff",
            background: "linear-gradient(135deg, #4facfe, #00f2fe)",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center" }}>
              User DashBoard
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ flex: "0 0 66%" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
                Welcome {regDash.name}
              </h2>
            </div>
            <div style={{ flex: "0 0 33%", textAlign: "right" }}>
              <h1>
                <Link
                  to="/Logout"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    backgroundColor: "#ff6b6b",
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Logout
                </Link>
              </h1>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "1.2rem",
                marginTop: "20px",
                color: "#e0f7fa",
              }}
            >
              You Login Email : {regDash.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
