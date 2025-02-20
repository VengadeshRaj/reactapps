import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TableContext } from "../Routes";

const Table = () => {
  const navigate = useNavigate();
  const { tableFields } = useContext(TableContext);
  return (
    <div>
      <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Skills</th>
            <th>Education</th>
        </tr>
        </thead>
        {tableFields.map((userData:any)=><tr>
            <td>{userData.firstName}</td>
            <td>{userData.lastName}</td>
            <td>{userData.email}</td>
            <td>{userData.gender}</td>
            <td>{userData.skills}</td>
            <td>{userData.education}</td>
        </tr> )}
      </table>
    </div>
  );
};

export default Table;
