from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.tutor import router as tutor_router

load_dotenv()

app = FastAPI(title = "AI DSA Tutor")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tutor_router, prefix="/api/tutor")


@app.get("/")
def root():
    return {"message": "Welcome to the AI DSA Tutor API!"}