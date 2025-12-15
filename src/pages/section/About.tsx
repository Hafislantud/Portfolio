import React from "react";
import { personalDetails } from "../../config/portfolio";
import { Section } from "../components/Section";

export const About: React.FC = () => {
  const { about } = personalDetails;

  return (
    <Section app="About" id="about">
      <section
        className="flex flex-end
       p-20 md:py-40 px-40 mb-60  justify-center"
      >
        {/* MAIN WRAPPER */}
        <div className="flex flex-end items-center justify-center mb-40 gap-40 ">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-amber-200 mb-6">
              {about.d4}
            </h1>

            <p className="text-4xl text-amber-100 mb-4">{about.d2}</p>
            <p className="text-2xl text-amber-50 mb-4 contents">{about.d8}</p>
          </div>

          {/* RIGHT — IMAGE COLUMN */}
          <div className=" flex flex-col columns-sm items-start justify-between w-full gap-10 ml-20">
            {/* LEFT TEXT */}
            <div className="max-w-3xl"></div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <img
                src={about.d3}
                className="w-20 h-20 rounded-full object-cover shadow-2xl hover:shadow-4xl transition"
              />

              <img
                src={about.d6}
                className="w-20 h-20 rounded-full object-cover shadow-2xl hover:shadow-4xl transition"
              />
              <img
                src={about.d7}
                className="w-20 h-20 rounded-full object-cover shadow-2xl hover:shadow-4xl transition"
              />
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};
