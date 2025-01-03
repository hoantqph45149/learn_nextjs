export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.sessionToken as string;
  const expiresAt = res.expiresAt as string;
  if (!sessionToken) {
    return new Response(
      JSON.stringify({ message: "Không nhận được session token" }),
      {
        status: 400,
      }
    );
  }
  const expiresDate = new Date(expiresAt).toUTCString();
  return Response.json(res, {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken} ; path=/; httpOnly; Expires=${expiresDate}; SameSite=Lax; Secure`,
    },
  });
}
