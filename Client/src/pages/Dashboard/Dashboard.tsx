import React, { useEffect, useState } from "react";
import "../../styles/main.scss";
import axios from "axios";
import Users from "../../assets/icons/box1.svg";
import Active from "../../assets/icons/box2.svg";
import Loans from "../../assets/icons/box3.svg";
import Savings from "../../assets/icons/box4.svg";
import "../../styles/main.scss";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
const Info = [
  {
    id: 1,
    icon: Users,
    name: "Users",
    count: 2453,
  },
  {
    id: 2,
    icon: Active,
    name: "Active Users",
    count: 2453,
  },
  {
    id: 3,
    icon: Loans,
    name: "Users with loans",
    count: 12453,
  },
  {
    id: 4,
    icon: Savings,
    name: "Users with savings",
    count: 102453,
  },
];
const Dashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="DashBoardContainer">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Navbar />
        <section className="Dashboard">
          <div className="title">Users</div>
          <div className="boxWrapper">
            {Info.map((M) => {
              return (
                <div className="box" key={M.id}>
                  <img src={M.icon} alt="" />
                  <div className="name">{M.name}</div>
                  <div className="count">{M.count}</div>
                </div>
              );
            })}
          </div>
          <div className="tableWrapper">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Invoce</th>
                  <th>Customer</th>
                  <th>Ship</th>
                  <th>Price</th>
                  <th>Pruchased Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{user.orgName}</th>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.accountNumber}</td>
                      <td>
                        <a href="#" className="btn btn-success">
                          Progress
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
