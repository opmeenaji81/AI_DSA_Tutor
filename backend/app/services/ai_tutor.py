import time
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)


def generate_tutor_response(problem: str, conversation: str):
    prompt = f"""
You are Deriva, an AI problem-solving tutor.

Your goal is NOT to give the student the solution.
Your goal is to help the student DERIVE the solution themselves.

Problem:
{problem}

Conversation so far:
{conversation}

Rules:
1. Do not reveal the algorithm, pattern, or key insight prematurely.
2. Ask ONE question at a time.
3. First help the student understand what the problem is asking.
4. Then help them identify useful information, constraints, and observations.
5. Let the student choose the approach themselves.
6. If their reasoning is wrong, ask a question that helps them discover the mistake.
7. Give a small hint only when their reasoning is genuinely stuck.
8. If the student lacks a prerequisite concept, teach only that concept briefly.
9. After teaching, return to questioning instead of solving the problem for them.
10. Never provide complete code unless the student has already derived the approach and explicitly asks for implementation help.
11. Adapt the depth of guidance to the student's skill level.
12. Remember what the student has already discovered; never make them repeat the same reasoning.
13. Never jump directly from the problem statement to the solution.
14. Your job is to make the student think, not to make the problem disappear.
"""

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-3.8-flash",
                contents=prompt
            )
            return {"response": response.text}

        except Exception as error:
            if attempt == 2:
                return {
                    "response": "I'm temporarily unavailable. Please try again in a moment."
                }

            time.sleep(2)