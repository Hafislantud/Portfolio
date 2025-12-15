import React from "react";
import { personalDetails } from "../../config/portfolio";
import { Section } from "../components/Section";

export const Skills: React.FC = () => {
  const {} = personalDetails;

  return (
    <Section app="Skills" id="skills">
      <section
        className="flex flex-end
       p-20 md:py-40 px-40 mb-60  justify-center  "
      >
        <div className="flex flex-end items-center justify-center mb-40 gap-40 ">
          <div className="max-w-3xl"></div>
        </div>
      </section>
    </Section>
  );
};
