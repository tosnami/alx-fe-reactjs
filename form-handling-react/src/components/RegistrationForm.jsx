import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("جميع الحقول مطلوبة!");
      return;
    }
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>اسم المستخدم:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div>
        <label>البريد الإلكتروني:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div>
        <label>كلمة المرور:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <button type="submit">تسجيل</button>
    </form>
  );
}

export default RegistrationForm;