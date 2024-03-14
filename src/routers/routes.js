import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Sms  from "../components/Sms";

export function MyRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Sms />} />
    </Routes>
  );
}