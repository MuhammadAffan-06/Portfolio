import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

export default function Freelance() {
  return (
    <>
      <section className="mt-10 px-4">
        <div className="flex justify-center items-center gap-4 mb-4">
          <h1 className="text-white text-xl" style={{ fontFamily: "Manrope" }}>
            Freelance Profile
          </h1>
          <Link
            href="https://www.fiverr.com/muhammad_affan6?public_mode=true"
            target="_blank"
          >
            <Button
              className="text-white bg-[#00b22d]"
              style={{ fontFamily: "Manrope" }}
            >
              Visit Me
            </Button>
          </Link>
        </div>

        <div className="w-full mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <Link href="https://www.fiverr.com/s/Ega9k8Y" target="_blank">
            <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-lg">
              <Image
                src="/fiverr.png"
                alt="Fiverr Profile"
                width={1200}
                height={1000}
                className="object-contain w-full h-auto rounded-lg"
                priority
              />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
