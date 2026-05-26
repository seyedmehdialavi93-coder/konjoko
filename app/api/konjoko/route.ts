export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "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",
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