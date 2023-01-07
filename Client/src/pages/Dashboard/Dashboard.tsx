import React, { useEffect, useState, useMemo } from "react";
import "../../styles/main.scss";
import Filter from "../../assets/icons/filter-results-button.svg";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import Users from "../../assets/icons/box1.svg";
import Active from "../../assets/icons/box2.svg";
import Loans from "../../assets/icons/box3.svg";
import Savings from "../../assets/icons/box4.svg";
import { Link } from "react-router-dom";

let PageSize: number = 10;
const Info = [
  {
    id: 1,
    icon: Users,
    name: "Users",
    count: "2,453",
  },
  {
    id: 2,
    icon: Active,
    name: "Active Users",
    count: "2,453",
  },
  {
    id: 3,
    icon: Loans,
    name: "Users with loans",
    count: "12,453",
  },
  {
    id: 4,
    icon: Savings,
    name: "Users with savings",
    count: "102,453",
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
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const userData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    console.table(users);
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  if (userData.length < 1) {
  } else {
    console.log("finally");
  }

  return (
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
              <th>
                <div className="flex">
                  Organization
                  <img src={Filter} alt="" />
                </div>
              </th>
              <th>
                <div className="flex">
                  Username
                  <img src={Filter} alt="" />
                </div>
              </th>
              <th>
                <div className="flex">
                  Email
                  <img src={Filter} alt="" />
                </div>
              </th>
              <th>
                <div className="flex">
                  Phone Number
                  <img src={Filter} alt="" />
                </div>
              </th>
              <th>
                <div className="flex">
                  Date Joined
                  <img src={Filter} alt="" />
                </div>
              </th>
              <th>
                <div className="flex">
                  Status
                  <img src={Filter} alt="" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.orgName}</th>
                  <td>
                    <Link to={`/user/${user.id}`}>{user.userName}</Link>{" "}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber.slice(0, 13)}</td>
                  <td>{user.createdAt.slice(0, 10)}</td>
                  <td>
                    <a
                      href="#"
                      style={{
                        background: "#39cd638",
                        padding: "0.7rem 1rem",
                        borderRadius: "100px",
                        color: "#39cd63",
                      }}
                    >
                      Active
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={(page: React.SetStateAction<number>) =>
            setCurrentPage(page)
          }
        />
      </div>
    </section>
  );
};

export default Dashboard;
