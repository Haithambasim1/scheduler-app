"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "../app/loading";
function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const { token, userId } = await res.json();

    if (res.ok) {
      setLoading(false);
      localStorage.setItem("userId", userId);
      localStorage.setItem("token", token);
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.meesage);
      console.log(data);
      setLoading(false);
    }
  };

  const router = useRouter();
  return (
    <div className=" mt-24 flex items-center justify-center">
      <form
        className="glassmorphism p-6 w-72 md:w-96 rounded shadow-lg "
        onSubmit={handleSubmit}
      >
        <h2 className=" text-2xl font-bold mb-4 text-black">Login</h2>
        {error && <p className=" m-3  text-red-500">{error}</p>}

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="enter email address"
            value={formData.email}
            onChange={handleInputChange}
            className=" border border-black p-2 w-full bg-transparent  text-black"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="enter ypur password"
            value={formData.password}
            onChange={handleInputChange}
            className=" border border-black p-2 w-full  text-black bg-transparent  "
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black px-4 text-white py-2 rounded w-full"
        >
          {loading ? <Loader /> : "Login"}
        </button>
        <p className=" mt-4 text-gray-600 text-sm text-center">
          dont have account?
          <Link href="/signup" className=" underline  font-bold">
            signup
          </Link>
          `
        </p>
      </form>
    </div>
  );
}

export default SignIn;
