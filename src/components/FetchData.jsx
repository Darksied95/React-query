import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4900/superheros")
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);
  if (isLoading) return <div>Loading ...</div>;

  if (error) return <div> {error}</div>;
  return (
    <div>
      {data.map((each) => {
        return (
          <div className="diff" key={each.id}>
            <li>{each.Name}</li>
            <li>{each.Alias}</li>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
