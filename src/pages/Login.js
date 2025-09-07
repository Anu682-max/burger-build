import React from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Амжилттай нэвтэрлээ");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Нэвтрэхэд алдаа гарлаа: " + error.message);
    }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto"}}>
                <h2>Нэвтрэх</h2> 
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">И-мэйл:</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Нууц үг:</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <button type="submit">Нэвтрэх</button>
                </form>
                <p>Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link></p>
            </div>
    );
}



