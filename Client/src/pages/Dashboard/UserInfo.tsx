import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../../assets/icons/np_back_3007750_000000 1.svg";
import Avatar from "../../assets/icons/avatar.png";
import FilledStar from "../../assets/icons/np_star_1171151_000000 2.svg";
import EmptyStar from "../../assets/icons/np_star_1208084_000000 1.svg";
import "../../styles/main.scss";

const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>({
    createdAt: "2072-12-27T03:44:22.522Z",
    orgName: "labore-dolor-et",
    userName: "Wilburn.Rice",
    email: "Maverick.Hyatt83@gmail.com",
    phoneNumber: "(553) 208-0727 x31321",
    lastActiveDate: "2099-02-28T23:17:40.013Z",
    profile: {
      firstName: "Darian",
      lastName: "Rolfson",
      phoneNumber: "494-278-0946",
      avatar: Avatar,
      gender: "Male",
      bvn: "815809412",
      address: "Gusikowski Locks",
      currency: "NGN",
    },
    guarantor: {
      firstName: "Celine",
      lastName: "Monahan",
      phoneNumber: "1-482-227-3654 x71086",
      gender: "Male",
      address: "O'Hara Centers",
    },
    accountBalance: "496.00",
    accountNumber: "GWQUSEH1",
    socials: {
      facebook: "@lendsqr",
      instagram: "@lendsqr",
      twitter: "@lendsqr",
    },
    education: {
      level: "Bsc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 Years",
      officeEmail: "Edna4@yahoo.com",
      monthlyIncome: ["128.57", "118.07"],
      loanRepayment: "122.47",
    },
    id: "1",
  });
  useEffect(() => {
    let url: string = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
    const getUser = async () => {
      try {
        let res = await axios.get(url);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [id]);
  return (
    <section className="User">
      <Link to="/" className="backLink">
        <img src={Arrow} alt="" />
        Back to Users
      </Link>
      <div className="topWrapper">
        <div className="title">User Details</div>
        <div className="BtnWrapper">
          <div className="Btn BlackList">BlackList User</div>
          <div className="Btn Activate">Activate user</div>
        </div>
      </div>
      <div className="userWrapper">
        <div className="top">
          <div className="userPic">
            <img src={user.profile.avatar} alt="" />
          </div>
          <div className="userFlex">
            <div className="title">{user.userName}</div>
            <div className="text">{user.accountNumber}</div>
          </div>
          <div className="Line"></div>
          <div className="userFlex">
            <div className="text">User's Tier</div>
            <div className="Stars">
              <img src={FilledStar} alt="" />
              <img src={EmptyStar} alt="" />
              <img src={EmptyStar} alt="" />
            </div>
          </div>
          <div className="Line"></div>
          <div className="userFlex">
            <div className="title">₦{user.accountBalance}</div>
            <div className="text">Keystone Bank</div>
          </div>
        </div>
        <div className="tabWrapper">
          <div className="tab selected">General Details</div>
          <div className="tab">Documents</div>
          <div className="tab">Bank Details</div>
          <div className="tab">Loans</div>
          <div className="tab">Savings</div>
          <div className="tab">App and System</div>
        </div>
      </div>
      <div className="Information">
        <div className="title">Personal Information</div>
        <div className="flex">
          <div className="item">
            <div className="text">Full name</div>
            <div className="title">
              {user.profile.firstName + user.profile.lastName}
            </div>
          </div>
          <div className="item">
            <div className="text">Phone Number</div>
            <div className="title">{user.profile.phoneNumber}</div>
          </div>
          <div className="item">
            <div className="text">Email Address</div>
            <div className="title">{user.email}</div>
          </div>
          <div className="item">
            <div className="text">Bvn</div>
            <div className="title">{user.profile.bvn}</div>
          </div>
          <div className="item">
            <div className="text">Gender</div>
            <div className="title">{user.profile.gender}</div>
          </div>
          <div className="item">
            <div className="text">Marital Status</div>
            <div className="title">Single</div>
          </div>
          <div className="item">
            <div className="text">Children</div>
            <div className="title">None</div>
          </div>
          <div className="item">
            <div className="text">Type of residence</div>
            <div className="title">Parent's Apartment</div>
          </div>
        </div>
        <div className="Divider"></div>
        <div className="title">Education and Employment</div>
        <div className="flex">
          <div className="item">
            <div className="text">Level of education</div>
            <div className="title">{user.education.level}</div>
          </div>
          <div className="item">
            <div className="text">Employment status</div>
            <div className="title">{user.education.employmentStatus}</div>
          </div>
          <div className="item">
            <div className="text">sector of employment</div>
            <div className="title">{user.education.sector}</div>
          </div>
          <div className="item">
            <div className="text">duration of employment</div>
            <div className="title">{user.education.duration}</div>
          </div>
          <div className="item">
            <div className="text">office email</div>
            <div className="title">{user.education.officeEmail}</div>
          </div>
          <div className="item">
            <div className="text">monthly income</div>
            <div className="title">
              {/* ₦{user.education.monthly[0]}-₦{user.education.monthly[1]} */}
            </div>
          </div>
          <div className="item">
            <div className="text">loan repayment</div>
            <div className="title">₦{user.education.loanRepayment}</div>
          </div>
        </div>
        <div className="Divider"></div>
        <div className="title">Socials</div>
        <div className="flex">
          <div className="item">
            <div className="text">twitter</div>
            <div className="title">{user.socials.twitter}</div>
          </div>
          <div className="item">
            <div className="text">facebook</div>
            <div className="title">{user.socials.facebook}</div>
          </div>
          <div className="item">
            <div className="text">instagram</div>
            <div className="title">{user.socials.instagram}</div>
          </div>
        </div>
        <div className="Divider"></div>
        <div className="title">Guarantor</div>
        <div className="flex">
          <div className="item">
            <div className="text">full name</div>
            <div className="title">
              {user.guarantor.firstName + user.guarantor.lastName}
            </div>
          </div>
          <div className="item">
            <div className="text">phone number</div>
            <div className="title">{user.guarantor.phoneNumber}</div>
          </div>
          <div className="item">
            <div className="text">email address</div>
            <div className="title">{user.guarantor.address}</div>
          </div>
          <div className="item">
            <div className="text">relationship</div>
            <div className="title">Sister</div>
          </div>
        </div>
        <div className="Divider"></div>
      </div>
    </section>
  );
};

export default UserInfo;
