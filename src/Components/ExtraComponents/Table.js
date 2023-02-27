import React from "react";
import "../ExtraComponents/Table.css";

const Table = () => {
  return (
    <div className="maincontainer">
      <table className="table">
        <thead>
          <tr>
            <th className="theadOne">CrossVal.</th>
            <th className="theadTwo">.كروسفال</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text">Hi {"{Guest Name},"}</td>
          </tr>
          <tr>
            <td className="textTwo">
              {"{Company Name}"} has <br />
              shared their financial
              <br /> model with you.
            </td>
          </tr>
          <button className="btn">Click here to access it!</button>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
