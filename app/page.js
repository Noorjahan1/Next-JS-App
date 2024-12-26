import React from "react";
import About from "./about/page";
import ContactUs from "./contactUs/page";
import CustomerSays from "./customerSays/page";
import ReasonsToChooseUs from "./reason/page";
export default function Home() {
  return (
      <main className="m-2">
        <CustomerSays/>
        <ReasonsToChooseUs/>
        <About/>
        <ContactUs/>
      </main>
    
  );
}
