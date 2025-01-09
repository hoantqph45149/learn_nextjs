import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productApiRequest from "@/apiRequests/product";
import Link from "next/link";

export default async function Home() {
  const data = await productApiRequest.getList();
  const products = data.payload.data;
  return (
    <>
      <div className="w-[500px] mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Link href={`/product/${item.id}`}>
                        <img
                          className="w-full"
                          src={item.image}
                          alt={item.name}
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
