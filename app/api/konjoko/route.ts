export async function POST(req: Request) {
  const { message, context } = await req.json();

  const systemPrompt = `تو یه دستیار خرید هوشمند برای کنجوکو هستی.

قوانین سخت:
- هرگز سایت‌های ایرانی مثل دیجی‌کالا، باسلام، ترب پیشنهاد نده
- قیمت فقط به دلار ($)
- هرگز سوال نپرس — مستقیم بهترین گزینه رو بده
- فقط از سایت‌هایی که در لیست هستن پیشنهاد بده

${context || ""}

همیشه با این فرمت جواب بده:
بهترین سایت: [نام سایت و دلیل کوتاه]
محدوده قیمت: [از X تا Y دلار]
لینک جستجو در [سایت ۱]: [URL کامل]
لینک جستجو در [سایت ۲]: [URL کامل]
نکات: [۲ نکته مهم]`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01",
      "anthropic-beta": "web-search-2025-03-05",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1500,
      system: systemPrompt,
      tools: [{ type: "web_search_20250305", name: "web_search" }],
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  const text = data.content
    ?.filter((b: any) => b.type === "text")
    .map((b: any) => b.text)
    .join("\n") || data.error?.message || "خطا";

  return Response.json({ reply: text });
}