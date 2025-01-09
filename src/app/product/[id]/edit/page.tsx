import productApiRequest from "@/apiRequests/product";
import ProductAddForm from "@/app/product/_components/prduduct-add-form";

import { Metadata, ResolvingMetadata } from "next";

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
  };
}

const ProductEdit = async ({ params }: { params: { id: string } }) => {
  const { payload } = await productApiRequest.getDetail(Number(params.id));
  const product = payload.data;

  return (
    <div>
      <ProductAddForm product={product} />
    </div>
  );
};

export default ProductEdit;
