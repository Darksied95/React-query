import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const RQFetchData = () => {
  let { isLoading, data, isError, error } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superhkeros");
  });

  console.log();
  if (isLoading) return <div>Loading ... </div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      {data?.data.map((each) => (
        <li>{each.Name}</li>
      ))}
    </div>
  );
};

export default RQFetchData;
