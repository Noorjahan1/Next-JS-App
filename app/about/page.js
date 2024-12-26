"use client";
import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "../../node_modules/@material-tailwind/react";

const About = () => {
  const [open, setOpen] = useState(1);
  const [accordions, setAccordions] = useState([
    {
      key: 1,
      body: 'Lorem Ipsum Hello World',
      heading: "FAQs1"
    },
    {
      key: 5,
      body: 'Lorem Ipsum Hello World',
      heading: "FAQs2"
    },
    {
      key: 2,
      body: 'Lorem Ipsum Hello World',
      heading: "FAQs3"
    },
    {
      key: 3,
      body: 'Lorem Ipsum Hello World',
      heading: "FAQs4"
    },
    {
      key: 4,
      body: 'Lorem Ipsum Hello World',
      heading: "FAQs5"
    }
  ]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="px-10 mx-[150px]">
        {Array.isArray(accordions) && accordions.length > 0 ? (
          accordions.map((accordion) => (
            <Accordion
              className="p-3 "
              key={accordion.key}
              open={open === accordion.key}
            >
              <div className={`flex gap-4 border border-gray-300' px-8 py-2 ${open === accordion.key ? 'border-b-0' : 'border-b border-gray-300'}`}>
                <AccordionHeader
                  className={`${open === accordion.key ? 'border-b' : 'border-none'}`}
                  onClick={() => handleOpen(accordion.key)}
                >
                  {accordion.heading}
                </AccordionHeader>
                <button onClick={() => handleOpen(accordion.key)}>
                  {open === accordion.key ? "-" : "+"}
                </button>
              </div>
              <AccordionBody className="p-10 border border-gray-300 border-t-0 shadow-md">
                {accordion.body}
              </AccordionBody>
            </Accordion>
          ))
        ) : (
          <p>No accordions available</p>
        )}
      </div>
    </>
  );
};

export default About;