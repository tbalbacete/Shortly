const uploadURL = "https://gotiny.cc/api";

export async function postLinkData(url: string) {
  const response = await fetch(uploadURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: `${url}` }),
  });
  return response.json();
}
