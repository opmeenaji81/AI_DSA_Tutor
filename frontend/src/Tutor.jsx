import "./Tutor.css";
import { useState, useRef } from "react";

function Tutor() {

    const profile = JSON.parse(
      localStorage.getItem("deriva_profile") || "null"
);

    if (!profile) {
      window.location.href = "/setup";
      return null   ;


}

    const skillLevel = profile.skillLevel;


    const [problem, setProblem] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    
const startTutorSession = async () => {
  setLoading(true);

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/tutor/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem,
          conversation: "No conversation yet. This is the start of a new tutoring session.",
          skill_level: skillLevel,
          image: selectedImage
            ? await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () =>
                  resolve(reader.result.split(",")[1]);
                reader.onerror = reject;
                reader.readAsDataURL(selectedImage);
              })
            : null,
          image_type: selectedImage?.type || null,
}),
      }
    );

    const data = await response.json();

    setMessages([
      {
        role: "ai",
        text: data.response,
      },
    ]);
  } catch (error) {
    setMessages([
      {
        role: "ai",
        text: "I'm temporarily unavailable. Please try again in a moment.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};

    

  const sendToTutor = async (studentMessage) => {
  setLoading(true);

  const updatedMessages = [
    ...messages,
    { role: "student", text: studentMessage },
  ];

  setMessages(updatedMessages);

  const conversation = updatedMessages
    .map((message) => `${message.role}: ${message.text}`)
    .join("\n");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/tutor/chat", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                problem,
                                conversation,
                                skill_level: skillLevel,
                              }),
});

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: data.response },
    ]);
  } catch (error) {
  console.error("Tutor error:", error);

  setMessages((prev) => [
    ...prev,
    {
      role: "ai",
      text: `Connection error: ${error.message}`,
    },
  ]);
} finally {
    setLoading(false);
  }
};



  return (
    <div className="tutor-page">
      <header className="tutor-header">
        <button
            className="tutor-logo"
            onClick={() => (window.location.href = "/home")}
  >
    ✦ Deriva
  </button>

  <nav className="tutor-nav">
    <button onClick={() => (window.location.href = "/home")}>
      Dashboard
    </button>

    <button onClick={() => (window.location.href = "/profile")}>
      Profile
    </button>
  </nav>

  <span>AI Problem-Solving Tutor</span>
  
<button
  className="new-session-btn"
  onClick={() => {
    setProblem("");
    setMessages([]);
    setSelectedImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }}
  disabled={loading}
>
  + New Session
</button>

</header>

      <main className="tutor-workspace">
        <section className="problem-panel">
          <p className="panel-label">PROBLEM</p>

          <h1>Let's solve something.</h1>

          <textarea
            className="problem-input"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Paste your DSA or SQL question here..."
            onPaste={(e) => {
              const items = e.clipboardData?.items;

              if (!items) return;

              for (const item of items) {
                if (item.type.startsWith("image/")) {
                  const file = item.getAsFile();
                
                  if (!file) continue;
                
                  if (file.size > 5 * 1024 * 1024) {
                    alert("Image must be 5 MB or smaller.");
                    return;
                  }
                
                  if (!["image/png", "image/jpeg"].includes(file.type)) {
                    alert("Please paste a PNG or JPG screenshot.");
                    return;
                  }
                
                  e.preventDefault();
                  setSelectedImage(file);
                  return;
                }
              }
}}
/>
          
<div
  className="upload-box"
  onClick={() => fileInputRef.current?.click()}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      fileInputRef.current?.click();
    }
  }}
>
  <input
    ref={fileInputRef}
    type="file"
    accept="image/png,image/jpeg,image/jpg"
    hidden
    onChange={(e) => {
      const file = e.target.files?.[0];

      if (!file) return;

      if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("Please select a PNG or JPG image.");
        e.target.value = "";
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be 5 MB or smaller.");
        e.target.value = "";
        return;
      }

      setSelectedImage(file);
    }}
  />

  <span>⌁</span>
  {selectedImage ? (
  <div className="selected-image-preview">
    <img
      src={URL.createObjectURL(selectedImage)}
      alt="Selected problem screenshot"
    />
    <p>{selectedImage.name}</p>
    <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedImage(null);
        
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }}
>
  Remove image ✕
</button>
  </div>
) : (
  <p>Or upload a screenshot</p>
)}
  <small>PNG, JPG up to 5MB</small>
</div>


          <button
              className="start-btn"
              
                onClick={() => {
                  if ((!problem.trim() && !selectedImage) || loading) return;
                
                  setMessages([]);
                  startTutorSession();
                }}

>            
              Start Deriving →
</button>
        </section>

        <section className="tutor-panel">
          <div className="tutor-intro">
            <div className="ai-icon">✦</div>
            <h2>Let's think this through.</h2>
            <p>
              I'll guide your reasoning instead of giving you the answer.
            </p>
          </div>

          <div className="conversation">
            {messages.map((message, index) => (
              <div
                className={
                  message.role === "student"
                    ? "student-message"
                    : "ai-message"
                }
                key={index}
              >
                {message.role === "ai" && <span>✦</span>}
                <p>{message.text}</p>
              </div>
            ))}
</div>
          <div className="chat-input">
            <input
              placeholder={loading ? "Deriva is thinking..." : "Your reasoning..."}
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() && !loading) {
                  sendToTutor(e.target.value.trim());
                  e.target.value = "";
                }
              }}
            />

            <button
              disabled={loading}
              onClick={(e) => {
                const input = e.currentTarget.previousElementSibling;

                if (input.value.trim() && !loading) {
                  sendToTutor(input.value.trim());
                  input.value = "";
                }
              }}
            >
              {loading ? "..." : "↑"}
            </button>
</div>
        </section>
      </main>
    </div>
  );
}

export default Tutor;