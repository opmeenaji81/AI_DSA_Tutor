from dotenv import load_dotenv
from fastapi import FastAPI
from app.routes.tutor import router as tutor_router


load_dotenv()

app = FastAPI(title = "AI DSA Tutor")
app.include_router(tutor_router, prefix="/api/tutor")


@app.get("/")
def root():
    return {"message": "Welcome to the AI DSA Tutor API!"}