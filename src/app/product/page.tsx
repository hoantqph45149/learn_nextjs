import productApiRequest from "@/apiRequests/product";
import DeleteProduct from "@/app/product/_components/delete-product";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

const ProductPage = async () => {
  const { payload } = await productApiRequest.getList();

  const productList = payload.data;
  return (
    <>
      <Link href="/product/add">
        <Button variant={"secondary"}> Add product </Button>
      </Link>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Acctions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productList.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                {" "}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Link href={`/product/${product.id}/edit`}>
                  <Button variant="outline">Edit</Button>
                </Link>
                <Link href={`/product/${product.id}/`}>
                  <Button variant="secondary">Detail</Button>
                </Link>
                <DeleteProduct product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductPage;
