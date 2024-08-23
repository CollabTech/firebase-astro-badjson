import type { APIRoute } from "astro";



export const POST: APIRoute = async ({ request }) => {
  console.log("here inside you 1");
  const data = await request.json();
  const firstname = data.get("firstname")?.toString();;
  
  // Validate the data - you'll probably want to do more than this
  if (!firstname) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  try {
   console.log("here inside you");
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Thank you! We'll be in touch."
    }),
    { status: 200 }
  );
};