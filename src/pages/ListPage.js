import axios from "axios";
import { useState ,useEffect} from "react";
import Card from "../components/card";

const ListPage = () => {

  const userData = {
    name: "sonny"
  };
  const [user, setUser] = useState([]);

  const postData = async () => {
    const response = await axios.post
      ('/user/create', userData).then((res) => {
        console.log(res);
        setUser([res.data]);
      })
  }
  // useEffect(() => {
  //   postData();
  // },[]);

  return(
    <div>
      <h1>Blogs</h1>
     {user.map(user => {
        return(
          // <div className = "card mb-3" key={user.id}>
          //     <div className="card-body">
          //     {user.name}, {user.id}
          //     </div>
          //   </div>
          // <Card key={user.id} name={user.name} id={user.id}></Card>
          <h1>2</h1>
        );
      })}
      {/* <h1>{user.name}, {user.id}</h1> */}
          <button onClick={postData}>Send POST Request</button>
    </div>
  );
}

export default ListPage;
