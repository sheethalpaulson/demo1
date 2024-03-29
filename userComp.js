import { useEffect, useState } from "react";
import UserAction from "./userAction";
import { useDispatch, useSelector } from "react-redux";

function UserComp(props) {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  //let userData = useSelector((storeData) => storeData.myReducer.user);//
  //console.log("useSelectore", userData);
const userdata=useSelector((storedata)=>{return storedata.myReducer.user});
  useEffect(() => {
    //if (userData.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          UserAction(data, dispatch);
          setState(data);
        });
    //} else {
     // setState(userData);
   // }
  }, []);//
  return (
    <div style={{ padding: "50px" }}>
      <h2>User Redux Component</h2>
      {state.length > 0 ? (
        <ol>
          {state.map((ele, index) => {
            return <li key={index + 1}>{ele.name}</li>;
          })}
        </ol>
      ) : (
        <div>
          {" "}
          <h2>Loading.....</h2>{" "}
        </div>
      )}
    </div>
  );
}

export default UserComp;