"use client";

import productApiRequest from "@/apiRequests/product";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleErrorApi } from "@/lib/utils";
import {
  CreateProductBody,
  CreateProductBodyType,
  ProductResType,
  UpdateProductBodyType,
} from "@/schemaValidations/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ProductAddForm = ({ product }: { product?: ProductResType["data"] }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  console.log(inputFileRef);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<CreateProductBodyType>({
    resolver: zodResolver(CreateProductBody),
    defaultValues: {
      name: product?.name || "",
      price: product?.price || 0,
      image: product?.image || "",
      description: product?.description || "",
    },
  });

  const createProduct = async (values: CreateProductBodyType) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file as Blob);

      const uploadImageResult = await productApiRequest.uploadImage(formData);

      const imageUrl = uploadImageResult.payload.data;
      const result: any = await productApiRequest.create({
        ...values,
        image: imageUrl,
      });

      toast({
        description: result.payload.message,
      });
      router.push("/product");
      router.refresh();
    } catch (error) {
      handleErrorApi({ error, setError: form.setError });
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (_values: UpdateProductBodyType) => {
    if (!product) return;
    setLoading(true);
    let values = _values;
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file as Blob);

        const uploadImageResult = await productApiRequest.uploadImage(formData);

        const imageUrl = uploadImageResult.payload.data;
        values = {
          ...values,
          image: imageUrl,
        };
      }
      const result: any = await productApiRequest.update(product.id, values);

      toast({
        description: result.payload.message,
      });
      router.push("/product");
      router.refresh();
    } catch (error) {
      handleErrorApi({ error, setError: form.setError });
    } finally {
      setLoading(false);
    }
  };

  async function onSubmit(
    values: CreateProductBodyType | UpdateProductBodyType
  ) {
    if (product) {
      await updateProduct(values);
    } else {
      await createProduct(values);
    }
  }

  return (
    <div className="w-[600px] mx-auto border-solid border-2 p-4 rounded-lg mt-10 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <h1 className="text-2xl font-bold text-center">
            {product ? "Update Product" : "Create Product"}
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter your price"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    ref={inputFileRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        console.log(e.target.files);
                        const file = e.target.files[0];
                        setFile(file);
                        field.onChange(`http://localhost:3000/${file.name}`);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {(file || product?.image) && (
            <div className="mt-4">
              <Image
                height={180}
                width={180}
                src={file ? URL.createObjectURL(file) : product?.image!}
                alt="Preview"
              />
              {file && (
                <Button
                  type="button"
                  variant={"destructive"}
                  size={"sm"}
                  onClick={() => {
                    setFile(null);
                    form.setValue("image", "");
                    if (inputFileRef.current) {
                      inputFileRef.current.value = "";
                    }
                  }}
                >
                  Remove Image
                </Button>
              )}
            </div>
          )}
          <Button disabled={loading} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductAddForm;
