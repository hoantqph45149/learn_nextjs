"use client";

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
import envConfig from "@/config";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useAppContext } from "@/app/AppProvider";

const LoginForm = () => {
  const { toast } = useToast();
  const { setSessionToken } = useAppContext();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginBodyType) {
    try {
      const result = await fetch(
        `${envConfig.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      ).then(async (res) => {
        const payload = await res.json();
        const data = {
          payload,
          status: res.status,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });

      const resultFormNextServer = await fetch(`/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          payload,
          status: res.status,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      setSessionToken(resultFormNextServer.payload.data.token);
      toast({
        title: "Success",
        description: result.payload.message,
      });
    } catch (error) {
      const errors = (
        error as { payload: { errors: { message: string; field: string }[] } }
      ).payload.errors as {
        message: string;
        field: string;
      }[];
      const status = (error as { status: number }).status;
      if (status === 422) {
        console.log(errors);
        errors.forEach((error) => {
          form.setError(error.field as keyof LoginBodyType, {
            type: "manual",
            message: error.message,
          });
        });
      } else {
        toast({
          title: "Error",
          description: (error as { payload: { message: string } }).payload
            .message,
          variant: "destructive",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
