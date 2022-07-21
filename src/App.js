import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

//syles
import "./App.css";

//components
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route
                path="/cryptocurrencies/:coinId"
                element={<CryptoDetails />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" style={{ color: "red", textAlign: "center" }}>
          <Typography.Title className="footer-title" level={5} type="secondary">
            Cryptoverse <br />
            All rights reserved |{" "}
            <span style={{ fontWeight: "400" }}>AmirCodder</span>
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchange</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
