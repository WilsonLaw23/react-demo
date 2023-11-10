import { Table } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import getActivity from "../Api/BoardApi";

export default function Whattodo() {
  const { WhatTodoList, handleOnClick } = getActivity();


  return (
    <Table>
        <thead> 
        <button onClick={handleOnClick}><FormattedMessage id="boring.click" /></button>
          <tr>
            <th><FormattedMessage id="activity" /></th>
            <th><FormattedMessage id="type" /></th>
            <th><FormattedMessage id="participants" /></th>
            <th><FormattedMessage id="price" /></th>
          </tr>
        </thead>
        <tbody>
          {WhatTodoList.map((activity) => (
            <tr>
              <td>{activity.activity}</td>
              <td>{activity.type}</td>
              <td>{activity.participants}</td>
              <td>{activity.price}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
}
