import Head from "next/head";
import Banner from "@/components/Banner";

import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FairCalculator from "@/components/FairCalculator";
import OurServices from "@/components/OurServices";
import ComponentHeader from "@/components/ComponentHeader";
import Form from "@/components/Form";
import WhyUs from "@/components/WhyUs";
import Button from "@/components/Button";
import Urgent from "@/components/Urgent";
import OurFleetsCard from "@/components/OurFleetsCard";
import OurFleets from "@/components/OurFleets";
import Fare from "@/components/Fare";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Head>
        <title>EleKars</title>
        <meta
          name="Description"
          content=" Book Your Electric Vehicle Online - Fast & Easy EV Car Rentals | Affordable EV Car Hire Services for a Greener Future"
        />
        <meta name="viewport" content="width=device-width,initials-scale=1.0" />
      </Head>
      <div className=" bg-blue-50">
        <Banner />
        <ComponentHeader title={"Get In Touch With Us!"} />
        <Form />
        <OurServices />
        <ComponentHeader title={"Why Choose Us!"} />
        <WhyUs />
        <br />
        <Urgent />
        {/* <Fare /> */}
        <OurFleets />
        <FloatingWhatsapp />
        <Footer />
      </div>
    </>
  );
}
