def generate_hint(problem: str, user_answer: str):
    return {
        "problem": problem,
        "user_answer": user_answer,
        "hint": "Let's break the problem into smaller steps."
    }