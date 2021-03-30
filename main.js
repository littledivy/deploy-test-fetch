const file = await fetch(new URL("./example.json", import.meta.url))
const contents = await file.json();
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(contents, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "application/json",
      },
    }),
  );
});
