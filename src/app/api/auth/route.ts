export async function POST(request: Request) {
  const res = await request.json();
  const sessionToken = res.payload?.data?.token;
  console.log(res);
  if (!sessionToken) {
    return new Response(
      JSON.stringify({ message: "Không nhận được session token" }),
      {
        status: 400,
      }
    );
  }
  return new Response(JSON.stringify(res.payload), {
    status: 200,
    headers: {
      "Set-Cookie": `sessionToken=${sessionToken} ; path=/; httpOnly`,
    },
  });
}
