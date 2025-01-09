import productApiRequest from "@/apiRequests/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Metadata, ResolvingMetadata } from "next";
import envConfig from "@/config";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const { payload } = await productApiRequest.getDetail(Number(id));
  const product = payload.data;

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: envConfig.NEXT_PUBLIC_URL + "/products/" + product.id,
      siteName: "product company",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
        },
      ],

      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: envConfig.NEXT_PUBLIC_URL + "/products/" + product.id,
    },
  };
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { payload } = await productApiRequest.getDetail(Number(params.id));
  const product = payload.data;
  return (
    <div className="w-[500px] mx-auto mt-20">
      <Card>
        <CardHeader>
          <CardTitle>
            <Image
              className="w-full"
              width={100}
              height={100}
              src={product.image}
              alt={product.name}
            />
          </CardTitle>
          <CardDescription>{product.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter>
          <p>{product.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetail;
