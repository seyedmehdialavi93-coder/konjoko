export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: "تو دستیار هوشمند کنجوکو هستی. همیشه به فارسی جواب بده.",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  const text