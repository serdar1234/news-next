export function GET(request: string) {
  console.log(request);

  return new Response("Hallelujah! I'm a fullstack!");
}
