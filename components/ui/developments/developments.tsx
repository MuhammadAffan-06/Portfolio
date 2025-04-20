import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Developments() {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-white text-xl" style={{ fontFamily: "Manrope" }}>
          EXPLORE MY DEVELOPMENTS
        </h1>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="text-white">
              <Card>
                <CardHeader>
                  <CardTitle>MindSync</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}
