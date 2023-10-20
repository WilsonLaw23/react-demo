import { useState } from "react";
import { Table } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';

export default function Whattodo() {
  const [Task, setTask] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      const data = await response.json();
  
      const newActivity = {
        activity: data.activity,
        type: data.type,
        participants: data.participants,
        price: data.price
      };
      setTask(prevtask => [...prevtask, newActivity]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  function handleDelete(activity) {
    const newlist = Task.filter((list) => list.activity !== activity.activity);
    setTask(newlist);
  }

  return (
    <Table>
        <thead> 
        <button onClick={fetchData}><FormattedMessage id="boring click" /></button>
          <tr>
            <th><FormattedMessage id="activity " /></th>
            <th><FormattedMessage id="type" /></th>
            <th><FormattedMessage id="participants" /></th>
            <th><FormattedMessage id="price" /></th>
            <th><FormattedMessage id="remove" /></th>
          </tr>
        </thead>
        <tbody>
          {Task.map((activity) => (
            <tr>
              <td>{activity.activity}</td>
              <td>{activity.type}</td>
              <td>{activity.participants}</td>
              <td>{activity.price}</td>
              <td><button onClick={() => handleDelete(activity)}><FormattedMessage id="remove" /></button></td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
}