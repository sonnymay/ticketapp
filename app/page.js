import React, { useState, useEffect } from "react";
import TicketCard from "./(components)/TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { tickets: [] }; // Return a default value in case of error
  }
};

const Dashboard = () => {
  const [data, setData] = useState({ tickets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTickets();
      setData(result);
    };
    fetchData();
  }, []);

  // Proceed with the rest of your component logic here, using `data` as your state.
};
