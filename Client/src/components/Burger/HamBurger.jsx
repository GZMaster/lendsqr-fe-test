import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "./HamBurger.scss";
import BriefCase from "../../assets/icons/briefcase 1.svg";
import Home from "../../assets/icons/home 1.svg";
import Users from "../../assets/icons/user-friends 1.svg";
import Guarantors from "../../assets/icons/users 1.svg";
import Loans from "../../assets/icons/sack 1.png";
import Handshake from "../../assets/icons/handshake-regular 1.svg";
import PiggyBank from "../../assets/icons/piggy-bank 1.svg";
import HandSack from "../../assets/icons/Group 104.svg";
import UsersChecks from "../../assets/icons/user-check 1.svg";
import UsersTimes from "../../assets/icons/user-times 1.svg";
import Bank from "../../assets/icons/np_bank_148501_000000 1.svg";
import Coins from "../../assets/icons/coins-solid 1.svg";
import Transactions from "../../assets/icons/icon.svg";
import Services from "../../assets/icons/galaxy 1.svg";
import UserCog from "../../assets/icons/user-cog 1.svg";
import Scroll from "../../assets/icons/scroll 1.svg";
import Chart from "../../assets/icons/chart-bar 2.svg";
import Slider from "../../assets/icons/sliders-h 1.svg";
import Badge from "../../assets/icons/badge-percent 1.svg";
import ClipBoard from "../../assets/icons/clipboard-list 1.svg";
import "../../styles/main.scss";
import logo from "../../assets/images/logo.svg";
import dropdownArrow from "../../assets/icons/np_next_2236826_000000 2.svg";

const Customers = [
  {
    id: 1,
    PathName: "Users",
    Path: "/",
    Icon: Users,
  },
  {
    id: 2,
    PathName: "Guarantors",
    Path: "/",
    Icon: Guarantors,
  },
  {
    id: 3,
    PathName: "Loans",
    Path: "/",
    Icon: Loans,
  },
  {
    id: 4,
    PathName: "Decision Models",
    Path: "/",
    Icon: Handshake,
  },
  {
    id: 5,
    PathName: "Savings",
    Path: "/",
    Icon: PiggyBank,
  },
  {
    id: 6,
    PathName: "Loan Requests",
    Path: "/",
    Icon: HandSack,
  },
  {
    id: 7,
    PathName: "Whitelist",
    Path: "/",
    Icon: UsersChecks,
  },
  {
    id: 8,
    PathName: "Karma",
    Path: "/",
    Icon: UsersTimes,
  },
];
const Business = [
  {
    id: 1,
    PathName: "Organization",
    Path: "/",
    Icon: BriefCase,
  },
  {
    id: 2,
    PathName: "Loan Products",
    Path: "/",
    Icon: HandSack,
  },
  {
    id: 3,
    PathName: "Savings Products",
    Path: "/",
    Icon: Bank,
  },
  {
    id: 4,
    PathName: "Fees and Charges",
    Path: "/",
    Icon: Coins,
  },
  {
    id: 5,
    PathName: "Transactions",
    Path: "/",
    Icon: Transactions,
  },
  {
    id: 6,
    PathName: "Services",
    Path: "/",
    Icon: Services,
  },
  {
    id: 7,
    PathName: "Service Account",
    Path: "/",
    Icon: UserCog,
  },
  {
    id: 8,
    PathName: "Settlements",
    Path: "/",
    Icon: Scroll,
  },
  {
    id: 9,
    PathName: "Reports",
    Path: "/",
    Icon: Chart,
  },
];

const HamBurger = () => {
  const [isOpen, setOpen] = useState(false);
  const [dropdownA, setDropdownA] = useState(false);
  const [dropdownB, setDropdownB] = useState(false);
  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="left"
        duration={0.8}
        color="#213f7d"
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <div className="logoWrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="links">
          <div className="link">
            <img src={BriefCase} alt="" />{" "}
            <div
              className="name"
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              Switch Organizations <img src={dropdownArrow} alt="" />
            </div>
          </div>
          <div className="link selected">
            <img src={Home} alt="" />
            <div className="name">Dashboard</div>
          </div>
        </div>
        <div
          className="title"
          onClick={() => {
            setDropdownA(!dropdownA);
          }}
          style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
        >
          Customers <img src={dropdownArrow} alt="" />
        </div>
        {!dropdownA ? null : (
          <div className="links">
            {Customers.map((C) => {
              return (
                <div key={C.id} className="link">
                  <img src={C.Icon} alt="" />
                  <div className="name">{C.PathName}</div>
                </div>
              );
            })}
          </div>
        )}

        <div
          className="title"
          onClick={() => {
            setDropdownB(!dropdownB);
          }}
          style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
        >
          Businesses <img src={dropdownArrow} alt="" />
        </div>
        {!dropdownB ? null : (
          <div className="links">
            {Business.map((B) => {
              return (
                <div className="link" key={B.id}>
                  <img src={B.Icon} alt="" />
                  <div className="name">{B.PathName}</div>
                </div>
              );
            })}
          </div>
        )}

        <div className="title">Settings</div>
        <div className="links">
          <div className="link">
            <img src={Slider} alt="" />
            <div className="name">Preferences</div>
          </div>
          <div className="link">
            <img src={Badge} alt="" />
            <div className="name">Fees and Pricing</div>
          </div>
          <div className="link">
            <img src={ClipBoard} alt="" />
            <div className="name">Audit Logs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamBurger;
