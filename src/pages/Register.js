import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.displayName.value;

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) await updateProfile(cred.user, { displayName });

      alert("Хэрэглэгч амжилттай бүртгэгдлээ");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Хэрэглэгч бүртгэхэд алдаа гарлаа: " + error.message);
    }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto"}}>
                <h2>Бүртгүүлэх</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">И-мэйл:</label>
                        <input type="email" name="email" id="email" required />
                        </div>
                    <div>
                        <label htmlFor="password">Нууц үг:</label>
                        <input type="password" name="password" id="password" required />
                        </div>
                    <div>
                        <label htmlFor="displayName">Харуулах нэр:</label>
                        <input type="text" name="displayName" id="displayName" required />
                        </div>
                    <button type="submit">Бүртгүүлэх</button>
                </form>
                <p>Бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link></p>
            </div>
    );
}
