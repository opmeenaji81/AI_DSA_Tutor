from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_tutor import generate_tutor_response

router = APIRouter()


class TutorChatRequest(BaseModel):
    problem: str
    conversation: str
    skill_level: str


@router.get("/test")
def test_tutor():
    return {"message": "AI Tutor is ready"}


@router.post("/chat")
def tutor_chat(request: TutorChatRequest):
    print("Received skill level:", request.skill_level)
    return generate_tutor_response(
        request.problem,
        request.conversation,
        request.skill_level
    )