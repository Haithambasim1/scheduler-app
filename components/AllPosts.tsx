"use client";

import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function feachPosts() {
      const res = await fetch(`/api/posts/${localStorage.getItem("userId")}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        setError("Error fetching posts");
      }
    }
    feachPosts();
  }, []);
  return (
    <div className=" min-h-screen p-10">
      <h2 className=" text-3xl font-bold mb-7  ">My Posts 🚀 </h2>
      {error && (
        <p className=" text-red-500 bg-red-200 text-center p-4 w-full mx-auto  ">
          {error}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-lg:grid-cols-4   gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="glassmorphism p-4 rounded shadow-md">
              <p>{post.content}</p>
              <p className=" text-sm text-gray-600 ">
                Scheduled At: {new Date(post.scheduledAt).toLocaleString()}
              </p>
              <p
                className={` text-sm ${
                  post.status === "scheduled"
                    ? " text-blue-500"
                    : " text-green-500"
                }`}
              >
                Status: {post.status}
              </p>
              <span className=" text-blue-600  items-center gap-3">
                {" "}
                <p className=" text-gray-800 ">puplish in:</p>{" "}
                <div className="flex gap-2">
                  <span className=" text-blue-600 hover:underline cursor-pointer flex items-center">
                    {" "}
                    {post.socialMedia[0]}
                  </span>
                  <span className=" text-blue-600 hover:underline cursor-pointer flex items-center">
                    {" "}
                    {post.socialMedia[1]}
                  </span>
                  <span className=" text-blue-600 hover:underline cursor-pointer flex items-center">
                    {" "}
                    {post.socialMedia[2]}
                  </span>
                </div>
              </span>
            </div>
          ))
        ) : (
          <div className=" flex items-center justify-center text-2xl text-gray-600 font-semibold ">
            No Posts Founds
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
