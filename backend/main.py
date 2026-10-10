from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.tutor import router as tutor_router

load_dotenv()

app = FastAPI(title = "AI DSA Tutor")
origins = [
    "http://localhost:5173",
    "https://thinkderiva.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tutor_router, prefix="/api/tutor")


@app.get("/")
def root():
    return {"message": "Welcome to the AI DSA Tutor API!"}