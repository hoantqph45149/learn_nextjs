export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.sessionToken;
  if (!sessionToken) {
    return new Response(
      JSON.stringify({ message: "Không nhận được session token" }),
      {
        status: 400,
      }
    );
  }
  return Response.json(res, {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken} ; path=/; httpOnly`,
    },
  });
}
