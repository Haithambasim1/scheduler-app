"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../app/loading";

// const formatDateInput = (date: Date) => {
//   const isoString = date.toISOString();
//   return isoString.substring(0, 16);
// };

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    content: "",
    scheduledAt: "",
    socialMedia: [],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updateSocialMedia = checked
      ? [...formData.socialMedia, value]
      : formData.socialMedia.filter((platform) => platform !== value);
    setFormData({ ...formData, socialMedia: updateSocialMedia });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const res = await fetch("/api/posts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setSuccess("Post created successfully");
      setFormData({ content: "", scheduledAt: "", socialMedia: [] });

      setLoading(false);

      router.push("/posts");
    } else {
      const data = await res.json();
      setError(data.meesage || "Error scheduling post");
      setLoading(false);
    }
  };

  return (
    <div className=" mt-24 flex items-center justify-center">
      <form
        className="glassmorphism p-6 w-72 md:w-96 rounded shadow-lg  "
        onSubmit={handleSubmit}
      >
        <h2 className=" text-2xl font-bold mb-4 text-black">Create New Post</h2>
        {error && (
          <p className=" m-3 text-red-500 bg-red-200 p-2 rounded transition-opacity w-full mx-auto">
            {error}
          </p>
        )}
        {success && (
          <p className=" m-3 text-green-500 bg-green-200 p-2 rounded transition-opacity w-full mx-auto">
            {success}
          </p>
        )}

        <div className="mb-4">
          <textarea
            name="content"
            placeholder="Post Content"
            value={formData.content}
            onChange={handleInputChange}
            className="  border border-black p-2 w-full text-black bg-transparent"
            required
          />
        </div>
        <div className="mb-4 ">
          <input
            name="scheduledAt" // remove the space
            type="datetime-local"
            value={formData.scheduledAt}
            onChange={handleInputChange}
            className=" border border-black p-2 w-full text-black bg-transparent"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="" className=" block text-black ">
            Select Social Media Platform
          </label>
          <label htmlFor="" className=" inline-flex items-center mt-2">
            <input
              type="checkbox"
              name=""
              value="facebook"
              onChange={handleCheckboxChange}
            />
            <span className=" ml-2 text-gray-600">Facebook</span>
          </label>
          <label htmlFor="" className=" inline-flex items-center mt-2">
            <input
              type="checkbox"
              name=""
              value="twitter"
              onChange={handleCheckboxChange}
            />
            <span className=" ml-2 text-gray-600">Twitter</span>
          </label>
          <label htmlFor="" className=" inline-flex items-center mt-2">
            <input
              type="checkbox"
              name=""
              value="instagram"
              onChange={handleCheckboxChange}
            />
            <span className=" ml-2 text-gray-600">Instagram</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-black px-4 text-white py-2 rounded w-full"
        >
          {loading ? <Loader /> : "Schedule Post"}
        </button>
      </form>
    </div>
  );
}
