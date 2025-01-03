import { cookies } from "next/headers";
import authApiRequest from "@/apiRequests/auth";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  if (!sessionToken) {
    return new Response(
      JSON.stringify({ message: "Không nhận được session token" }),
      {
        status: 401,
      }
    );
  }

  try {
    const res: any = await authApiRequest.slideSessionFromNextServerToServer(
      sessionToken.value
    );

    const newExpiresAtDate = new Date(res.payload.data.expiresAt).toUTCString();
    return Response.json(res.payload, {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=${sessionToken.value} ; path=/; httpOnly; Expires=${newExpiresAtDate}; SameSite=Lax; Secure`,
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
