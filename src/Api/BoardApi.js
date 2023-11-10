import { useState } from "react";

export default function Activity() {
  const [WhatTodoList, setWhatTodoList] = useState([]);

  const handleOnClick = async () => {
    try {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      const data = await response.json();
  
      const newActivity = {
        activity: data.activity,
        type: data.type,
        participants: data.participants,
        price: data.price
      };
      setWhatTodoList(prevtask => [...prevtask, newActivity]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { WhatTodoList, handleOnClick };
}
