import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { rateLimit } from "@/lib/rate-limit";

const openai = new OpenAI();

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const { allowed, remaining } = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Limit": "10",
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const { name, nativeLanguage, targetLanguage, level, sessionId } =
      await request.json();

    if (!nativeLanguage || !targetLanguage || !level || !sessionId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a language teacher. Generate natural, diverse practice sentences. Never repeat structures.",
        },
        {
          role: "user",
          content: `Generate 10 sentences in ${targetLanguage} for a ${level} CEFR level learner whose native language is ${nativeLanguage}.

Rules:
- Each sentence must have a DIFFERENT grammatical structure
- Each sentence must be about a DIFFERENT topic
- Vary types: questions, negatives, positives, commands
- Natural real-life sentences, not textbook
- Topics: daily life, work, travel, emotions, food, technology, relationships, nature
- Translation must be in ${nativeLanguage}

Session ID: ${sessionId}-${Date.now()}

Return ONLY this JSON:
{
  "sentences": [
    {
      "target": "string",
      "native": "string",
      "hint": "string",
      "topic": "string"
    }
  ]
}`,
        },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 502 }
      );
    }

    const parsed = JSON.parse(content);
    return NextResponse.json(
      { sentences: parsed.sentences },
      {
        headers: {
          "X-RateLimit-Limit": "10",
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 502 }
      );
    }
    return NextResponse.json(
      { error: "Failed to generate sentences" },
      { status: 500 }
    );
  }
}
