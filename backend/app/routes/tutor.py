from fastapi import APIRouter
from app.services.ai_tutor import generate_tutor_response

router = APIRouter()


@router.get("/test")
def test_tutor():
    return {"message": "AI Tutor is ready"}


@router.post("/chat")
def tutor_chat(problem: str, conversation: str):
    return generate_tutor_response(problem, conversation)