export async function POST(req: Request) {
  const { message, context } = await req.json();

  const isLink = message.startsWith("http");

  const systemPrompt = `تو یه دستیار خرید هوشمند برای کنجوکو هستی.

قوانین سخت:
- هرگز سایت‌های ایرانی پیشنهاد نده
- قیمت فقط به دلار ($)
- هرگز سوال نپرس — مستقیم جواب بده
- فقط از سایت‌های لیست پیشنهاد بده

${context || ""}

${isLink ? `کاربر یه لینک محصول داده. با web search اطلاعات این محصول رو پیدا کن و با این فرمت جواب بده:
نام محصول: [نام]
قیمت: [$]
امتیاز: [اگه موجوده]
مشخصات: [۳-۴ مشخصه مهم]
لینک: ${message}
نظر کنجوکو: [ارزش خرید داره؟]` 
: `کاربر دنبال کالا میگرده. با web search بهترین گزینه رو پیدا کن و با این فرمت جواب بده:
بهترین سایت: [نام و دلیل]
محدوده قیمت: [$X تا $Y]
لینک جستجو در [سایت ۱]: [URL]
لینک جستجو در [سایت ۲]: [URL]
نکات: [۲ نکته]`}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
      "anthropic-version": "2023-06-01",
      "anthropic-beta": "web-search-2025-03-05",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
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