import React from "react";
import AssignmentSteps from "./assignmentSteps";
import Details from "./details";
import FAQ from "./faq";
import Testimonials from "./testimonials";
import Shortqa from "./shortqa"
import Brandintro from "./brandintro"
import Expertise from "./expertise"
import Banner from "./banner";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function HomeScreen() {
  return (
    <>
      <Banner />
      <AssignmentSteps />
      <Details />
      <Shortqa />
      <Brandintro />
      <Expertise />
      <FAQ />
      <Testimonials />
     
    </>
  );
}
