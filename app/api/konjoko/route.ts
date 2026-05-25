import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    system: `تو دستیار هوشمند کنجوکو هستی. کنجوکو یک پلتفرم تجارت بین‌المللی برای ایرانیان است که در زمینه خرید کالا از دبی، چین و ترکیه و پرداخت‌های بین‌المللی تخصص دارد. 
    
    وقتی کاربر محصولی می‌خواهد:
    - بهترین منبع خرید رو پیشنهاد بده (دبی، چین یا ترکیه)
    - قیمت تقریبی رو بگو
    - مراحل خرید از طریق کنجوکو رو توضیح بده
    - در آخر بگو برای شروع با کنجوکو در واتساپ تماس بگیرند
    
    همیشه به فارسی جواب بده و دوستانه باش.`,
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return Response.json({ reply: text });
}