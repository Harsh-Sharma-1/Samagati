import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Input from "../components/UI/Input";
import NueButton from "../components/UI/NueButton";
import SocialMediaBtn from "../components/UI/SocialMediaBtn";

import { AiFillGoogleCircle } from "react-icons/Ai";
import { BsFacebook } from "react-icons/Bs";

import styles from "../styles/Register.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Hello, Welcome To Samagati</h1>
          <h3>Create your new profle</h3>
          <form>
            <Input placeholder="Username" onChange="" type="text" />
            <Input placeholder="Email" onChange="" type="email" />
            <Input placeholder="Contact" onChange="" type="tel" />
            <Input placeholder="Password" onChange="" type="password" />
            <Input placeholder="Confirm Password" onChange="" type="password" />
            <NueButton name="Create" />
          </form>
          <h5 style={{ marginLeft: "4rem", color: "#173b82" }}>Or</h5>
          <div className={styles.iconContainer}>
            <SocialMediaBtn icon={AiFillGoogleCircle} />
            <SocialMediaBtn icon={BsFacebook} />
          </div>
          <div className={styles.accountSpan}>
            <span>Already a member?</span>
            <span>
              <Link href="./login">
                <a> Sign in</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="right-content">
          <Image
            src="/assets/Saly.png"
            alt="Picture of the author"
            width={550}
            height={720}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
