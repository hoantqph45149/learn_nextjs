import apiAuthRequest from "@/apiRequests/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const res = await request.json();
  const force = res.force as boolean | undefined;

  if (force) {
    return Response.json(
      {
        message: "Đã đăng xuất",
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `sessionToken= ; path=/; httpOnly; Max-Age=0`,
        },
      }
    );
  }
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  if (!sessionToken) {
    return new Response(
      JSON.stringify({ message: "Không nhận được session token" }),
      {
        status: 400,
      }
    );
  }

  try {
    const result = await apiAuthRequest.logoutFormNextServerToServer(
      sessionToken.value
    );
    return Response.json(result.payload, {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken= ; path=/; httpOnly; Max-Age=0`,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json((error as any).payload, {
        status: (error as any).status || 500,
      });
    } else {
      return Response.json(
        { message: "Có lỗi xảy ra" },
        {
          status: 500,
        }
      );
    }
  }
}
