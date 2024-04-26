import React from "react";
import { Routes, Route } from "react-router-dom";
import { Applicant, Application, Dashboard, Login } from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications">
          <Route index element={<Application />} />
          <Route path="applicant/:id" element={<Applicant />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
