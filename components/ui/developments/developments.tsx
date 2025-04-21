import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
export default function Developments() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-white text-xl" style={{ fontFamily: "Manrope" }}>
          EXPLORE MY DEVELOPMENTS
        </h1>
        <Carousel className="mt-10 ml-3 mr-3">
          <CarouselContent>
            {projects.map((projects, index) => (
              <CarouselItem
                className="w-full sm:basis-1/2 md:basis-1/2 flex items-center justify-center"
                key={index}
              >
                <Card className="w-full max-w-sm rounded-2xl border-none overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-lg transition-transform hover:scale-[1.01] hover:shadow-2xl">
                  <CardContent className="p-4">
                    <Image
                      src={projects.image}
                      alt="not loaded yet"
                      width={800}
                      height={800}
                      className="rounded-xl object-cover w-full h-48 sm:h-56"
                    />
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 pb-4 text-white">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {projects.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {projects.description}
                      </p>
                    </div>
                    <Link
                      href={projects.link}
                      target="_blank"
                      className="text-sm flex items-center gap-1 whitespace-nowrap"
                    >
                      View Project <ArrowUpRight />
                    </Link>
                  </CardFooter>
                </Card>
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
