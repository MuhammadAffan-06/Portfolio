import { Button } from "@/components/ui/button";
import Profilepicture from "../styled-image/styled-image";
import { ArrowUpRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Introduction() {
  return (
    <>
      <div
        className="grid mt-20 justify-items-center md:grid-cols-2 text-white"
        style={{ fontFamily: "Manrope" }}
      >
        {/* Profile Image Section with Glow */}
        <section className="relative flex justify-center items-center">
          {/* Match the size of your actual image */}
          <div className="absolute w-[200px] h-[200px] rounded-full z-0 animate-glow bg-[#206DC7] blur-xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center md:text-4xl mb-4">
              Muhammad Affan
            </h1>
            <Profilepicture />
          </div>
        </section>

        {/* Introduction Content */}
        <section className="flex flex-col md:items-start items-center gap-2 px-4 md:px-20 py-10">
          <h1 className="flex items-center gap-2 font-semibold text-xl md:text-3xl text-white">
            Let's
            <ArrowUpRight className="p-2 bg-[#4A2CED] text-white rounded-sm size-7 md:size-9" />
            work together
          </h1>

          <h1 className="flex gap-1 m-2 text-base md:text-xl text-white">
            <Sparkle className="text-[#AEA1F7]" /> Introduction:
          </h1>

          <p className="text-center md:text-left text-sm md:text-base md:max-w-3xl text-[#AFB0B6] p-3">
            MERN Stack Developer with over 6 months of work experience,
            proﬁcient in backend development, database operations, and CRUD
            functionalities. Conﬁdent in developing large-scale and maintainable
            web applications using a technical stack that includes Node.js,
            MongoDB, and Express, alongside frontend development with React.js
            and Next JS. Experienced in API implementation, problem- solving,
            and utilizing frameworks such as Material UI and Tailwind CSS.
            Interested in exploring and implementing Web3, Artiﬁcial
            Intelligence, and other cutting-edge technologies.
          </p>

          <h1 className="flex gap-1 m-2 text-base md:text-xl text-white">
            <Sparkle className="text-[#AEA1F7]" /> Contact Information:
          </h1>

          <section className="flex md:grid grid-cols-1 md:grid-cols-2 justify-center gap-8 w-full">
            {/* Contact Info */}
            <div className="text-sm md:text-base flex flex-col gap-4 text-white">
              <div>
                <p>Email</p>
                <p className="text-[#AFB0B6]">maffan2202@gmail.com</p>
              </div>

              <div className="flex gap-4 bg-black px-5 py-2 rounded-full w-fit">
                <Link
                  href="https://github.com/MuhammadAffan-06/"
                  target="_blank"
                  className="bg-white p-2 rounded-full text-black hover:text-sky-400 transition"
                >
                  <FiGithub className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/muhammad-affan-396660245/"
                  target="_blank"
                  className="bg-white p-2 rounded-full text-black hover:text-blue-500 transition"
                >
                  <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>
            </div>

            {/* Phone + Buttons */}
            <div className="text-sm md:text-base text-center md:text-left flex flex-col justify-center gap-4 text-white">
              <div>
                <p>Phone Number</p>
                <p className="text-[#AFB0B6]">+92-3243217477</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
                <Button className="hidden md:inline-block bg-[#4A2CED] hover:bg-[#3722bd] text-white">
                  Let's Work
                </Button>
                <Button className="bg-white text-black hover:bg-gray-300">
                  Download CV
                </Button>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
