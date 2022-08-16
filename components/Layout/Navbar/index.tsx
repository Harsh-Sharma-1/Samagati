import Image from "next/image";
import React from "react";
import NavBtn from "../../UI/NavBtn/Index";
import styles from "./navbar.module.css";
import {
  AiOutlineHome,
  AiOutlineInfo,
  AiOutlinePhone,
  AiOutlineCompass,
} from "react-icons/ai";
import { TbPlaneDeparture } from "react-icons/tb";
import { RiLoginBoxLine, RiTeamLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image src="/assets/Logo.png" width={186} height={43} alt="Samagati" />
      <ul className={styles.NavList}>
        <li>
          <NavBtn Icon={AiOutlineHome} Label="Home" page_link="/" />
        </li>
        <li>
          <NavBtn Icon={AiOutlineInfo} Label="About us" page_link="/about-us" />
        </li>
        <li>
          <NavBtn Icon={RiTeamLine} Label="Team" page_link="/team" />
        </li>
        <li>
          <NavBtn Icon={AiOutlineCompass} Label="Tours" page_link="/tours" />
        </li>
        <li>
          <NavBtn
            Icon={TbPlaneDeparture}
            Label="Booking"
            page_link="/booking"
          />
        </li>
        <li>
          <NavBtn Icon={AiOutlinePhone} Label="Phone" page_link="/contact" />
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <NavBtn Icon={RiLoginBoxLine} Label="Login" page_link="/login" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
