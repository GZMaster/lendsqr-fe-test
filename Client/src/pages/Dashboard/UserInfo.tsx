import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any[]>([]);
  useEffect(() => {
    let url: string = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users:${id}`;
    const getUser = async () => {
      try {
        let res = await axios.get(url);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return <div>UserInfo</div>;
};

export default UserInfo;
