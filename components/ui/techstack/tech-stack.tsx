import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const techStack = [
  { name: "HTML", logo: "/icons/html5-color.svg" },
  { name: "CSS", logo: "/icons/css3-color.svg" },
  { name: "JavaScript", logo: "/icons/javascript-color.svg" },
  { name: "Tailwind", logo: "/icons/tailwindcss-color.svg" },
  { name: "Shadcn", logo: "/icons/shadcn.png" },
  { name: "Material Ui", logo: "/icons/mui-color.svg" },
  { name: "React", logo: "/icons/react-color.svg" },
  { name: "Next.js", logo: "/icons/nextdotjs.svg" },
  { name: "Node.js", logo: "/icons/nodedotjs-color.svg" },
  { name: "Express", logo: "/icons/express.svg" },
  { name: "MongoDB", logo: "/icons/mongodb-color.svg" },
  { name: "Sequelize", logo: "/icons/sequelize-color.svg" },
  { name: "Mongoose", logo: "/icons/mongoose-color.svg" },
  { name: "Postgresql", logo: "/icons/postgresql-color.svg" },
  { name: "MySQL", logo: "/icons/mysql-color.svg" },
];
export default function TechStack() {
  return (
    <>
      <section className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-10 gap-4 mt-2 md:mt-10">
        <h1 className="text-white text-xl sm:text-2xl font-semibold" style={{ fontFamily: "Manrope" }}>
          Technologies I Use:
        </h1>
        <Carousel>
          <CarouselContent>
            {techStack.map((tech, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 flex items-center justify-center"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
