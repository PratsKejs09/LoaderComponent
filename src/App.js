import "./styles.css";
import { useEffect, useState } from "react";
import FacebookLoader from "./FacebookLoader";
import CustomLoader from "./CustomLoader";

export default function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getNames = async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    const data = await res.json();
    setRecords(data);
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      getNames();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    //   <FacebookLoader />
    // </div>
    <div className="App">
      {loading ? (
        <CustomLoader />
      ) : (
        records &&
        records.map((record) => {
          return (
            <p key={record.website + record.key}>
              <li>{record.website} </li>
            </p>
          );
        })
      )}
    </div>
  );
}
