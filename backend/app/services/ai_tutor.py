import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key)


def generate_hint(problem: str, user_answer: str):
    prompt = f"""
You are an AI DSA Tutor.

Problem:
{problem}

Student's answer:
{user_answer}

Give the student ONE helpful hint.
Do not give the complete solution or code.
Guide their thinking step-by-step.
"""

    response = client.models.generate_content(
        model="gemini-3.8-flash",
        contents=prompt
    )

    return {"hint": response.text}