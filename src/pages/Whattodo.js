import {useState, useEffect} from "react";
import { FormattedMessage } from "react-intl";

export default function Whattodo() {
    const [whatTodo, setWhatTodo] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.boredapi.com/api/activity/');
        const data = await response.json();
        setWhatTodo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div>
        {whatTodo ? (
          <div>
            <button onClick={fetchData}><FormattedMessage id="boring.click" /></button>
            <p>{JSON.stringify(whatTodo, null, 2)}</p>
          </div>
        ) : (
          <p><FormattedMessage id="loading" /></p>
        )}
      </div>
    )
}
