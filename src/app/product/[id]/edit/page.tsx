import productApiRequest from "@/apiRequests/product";
import ProductAddForm from "@/app/product/_components/prduduct-add-form";

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
