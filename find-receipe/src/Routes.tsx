import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Login from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import { FormInterface } from "./types/FormType";
import Table from "./pages/Table";

export const TableContext = createContext<any>(undefined);
const FrRoutes = () => {
  const [tableFields, setTableFields] = useState<FormInterface[]>([]);

  return (
    <TableContext.Provider value={{tableFields,setTableFields}}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </TableContext.Provider>
  );
};

export default FrRoutes;
