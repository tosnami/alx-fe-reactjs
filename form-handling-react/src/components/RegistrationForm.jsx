import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("جميع الحقول مطلوبة!");
      return;
    }
    setError("");
    console.log("تم إرسال البيانات:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>تسجيل حساب</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="اسم المستخدم" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="كلمة المرور" />
      <button type="submit">تسجيل</button>
    </form>
  );
};

export default RegistrationForm;