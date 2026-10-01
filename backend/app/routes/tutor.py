from fastapi import APIRouter
from app.services.ai_tutor import generate_hint

router = APIRouter()


@router.get("/test")
def test_tutor():
    return {"message": "AI Tutor is ready"}


@router.post("/hint")
def get_hint(problem: str, user_answer: str):
    return generate_hint(problem, user_answer)