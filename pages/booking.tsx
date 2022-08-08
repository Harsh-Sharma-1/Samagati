import type { NextPage } from "next";
import { Children } from "react";
import BookingText from "../components/UI/BookingText/BookingText";
import FloatingBtn from "../components/UI/Floatingbtn";
import InfoBox from "../components/UI/InfoBox";
import Input from "../components/UI/Input";
import TextAreaBox from "../components/UI/TextAreaBox";
import styles from "../styles/booking.module.css";
import Carousel from "../components/Layout/Carousel";

const DATA = [
  { title: "Overview", info: "" },
  { title: "Itinerary along with inclusions and exclusions", info: "" },
  { title: "Terms and Conditions", info: "" },
  { title: "Cancellation Policy", info: "" },
];

const Booking: NextPage = () => {
  const bookingData = DATA.map((data) => {
    <BookingText title={data.title} info={data.info} />;
  });

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <InfoBox>
            <Carousel />
            {bookingData}
          </InfoBox>
        </div>
        <div className={styles.rightContent}>
          <h1>Book your spot on our next voyage!</h1>
          <Input placeholder="Enter your full name" onChange="" type="text" />
          <Input placeholder="Enter your email" onChange="" type="email" />
          <Input
            placeholder="Enter your contact number"
            onChange=""
            type="tel"
          />
          <TextAreaBox
            placeholder="What are your expectations from this Voyage"
            onChange={""}
          />
          <Input
            placeholder="Redeem your credits here"
            onChange=""
            type="text"
          />
          <div className={styles.payeeAndChat}>
            <div className={styles.paymentButton}>Proceed for Payment</div>
            <FloatingBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
