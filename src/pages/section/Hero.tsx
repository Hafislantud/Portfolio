import { personalDetails } from "../../config/portfolio";
import { Section } from "../components/Section";

export const Hero = () => {
  const { personal } = personalDetails;

  // pogi si sir Mark Jaemerl Diestro

  return (
    <Section app="Hero" id="hero">
      <div
        className="flex flex-end
       p-20 md:py-40 px-40 mb-60  justify-center"
      >
        <div className="flex flex-end items-center justify-center mb-40 gap-40 ">
          <div className="text-3xl flex flex-col p-10">
            <h2 className=" flex flex-start text-[#E0D9D9] mt-5 text-7xl mr-20 py-5 ">
              Hi, <a className="  text-amber-100 ml-2 text-7xl text-s">I'm</a>
            </h2>

            <h2 className="flex flex-end  text-[#E0D9D9] mb-5 text-5xl   ">
              {personal.name}
            </h2>
            <h2 className="flex flex-end  text-[#E0D9D9] mb-5 text-2xl ">
              {personal.title}
              <a className="ml-1 text-amber-100">Trainee</a>
            </h2>

            {/* button */}
            <div>
              <button
                className="bg-[#265170] hover:bg-[#F5E7C6] text-white hover:text-black text-sm mt-9
                rounded-md transition py-2 px-3"
              >
                Resume
              </button>
              <button
                className=" img-https://www.freeiconspng.com/img/119 bg-[#265170] hover:bg-[#F5E7C6] text-white hover:text-black text-sm mt-9
                rounded-md transition py-2 ml-4 px-3"
              >
                {personal.email}
              </button>
            </div>
          </div>

          <div>
            <img
              src={personal.imageUrl}
              className="w-50 h-50  mt-2 rounded-full object-cover border-8 border-[#234C6A]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
