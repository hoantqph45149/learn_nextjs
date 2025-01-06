import productApiRequest from "@/apiRequests/product";

const ProductEdit = async ({ params }: { params: { id: string } }) => {
  const { payload } = await productApiRequest.getDetail(Number(params.id));

  return <div>ProductEdit</div>;
};

export default ProductEdit;
