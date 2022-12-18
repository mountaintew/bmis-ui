import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../src/views/landing";
import NotFound from "../src/views/errors";
import Login from "../src/views/login";
import Register from "../src/views/register";
import { Page } from "./components/Pages";
import Start from "./views/start";
import Dashboard from "./views/dashboard";

function withPage(element) {
  return <Page>{element}</Page>;
}

function Views() {
  return (
    <Routes>
      <Route path="/" element={withPage(<Landing />)} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/get-started" element={<Start />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Views;
