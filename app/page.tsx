import React from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Alice Jhonson",
    feedback:
      "this app has transfaed my daily routines! Highly recommended it!",
  },
  {
    name: "Jhon Adams",
    feedback: "I love tracking my Habits, Its always keeping me accountable!",
  },
  {
    name: "Emma Brown",
    feedback: "A game changer for my productivity, easy and simple to use!",
  },
];

const page = () => {
  return (
    <div>
      <header className="  text-black py-28">
        <div className="container mx-auto text-center">
          <h1 className=" text-2xl md:text-5xl font-bold black_gradient">
            {" "}
            Effortlessly Schedule Your Social Media Posts
          </h1>
          <p className=" text-xl mt-2  ">
            Organize your content and never miss a post again.
          </p>
          <Link
            href="/create-post"
            className=" text-sm md:text-[22px] rounded mt-6 inline-block bg-gradient-to-r from-sky-700 via-blue-500 to-sky-500 text-white font-bold py-4 px-6"
          >
            Create & Scheduale Your First Post 🤙🏻
          </Link>
        </div>
      </header>

      <section className=" py-16  text-black">
        <div className="container mx-auto text-center">
          <h2 className=" text-2xl  md:text-4xl font-bold mb-8">
            Why Use Our Scheduler?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                Automate Your Posting 🤖
              </h3>
              <p className="text-gray-600">
                save time by automatimg your posts across multiple platforms.⏳
              </p>
            </div>
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                Manage Content Effortlessly 🤷🏻‍♂️
              </h3>
              <p className="text-gray-600">
                Organize and schedule your content with ease in minitus not
                houres 😎
              </p>
            </div>
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                Support multiple social media platforms 💻
              </h3>
              <p className="text-gray-600">
                Create a new post with your content and add it to your social
                network 👻
              </p>
            </div>
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                Congrates your frinds
              </h3>
              <p className="text-gray-600">
                share your congratulations with others and have fun with them
                🎉✨
              </p>
            </div>
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                many siliprties use our app 🥇
              </h3>
              <p className="text-gray-600">
                join to your friends and silpirtes and use our secheduler to
                monitor your activity 😍👇🏻👆🏻
              </p>
            </div>
            <div className="p-6 glassmorphism rounded-lg shadow-lg">
              <h3 className=" text-xl font-semibold mb-4">
                Detailed Insights 🕵🏻‍♀️
              </h3>
              <p className="text-gray-600">
                Track performance and adjust your strategy accordingly. 👌🏻
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10 bg-base-200 ">
        <h2 className=" text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          What Our Users Say 🔎
        </h2>
        <div className="glassmorphism py-12 px-10 flex flex-wrap justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-300 mx-8 md:mx-36 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg w-full  min-sm-w-1/3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <h3 className="mt-4 font-bold text-center">
                    {testimonial.name}
                  </h3>
                </div>

                <div className=" flex items-center">⭐⭐⭐</div>
              </div>
              <p className="text-lg italic text-center">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className=" py-10 bg-base-200 ">
        <h2 className=" text-3xl font-bold mb-4  flex justify-center items-center gap-2">
          Contact Us 📩
        </h2>
        <p className="text-center">
          if you have any question, feel free to reach out!
        </p>
        <form className="mt-4 mx-8 md:mx-36 ">
          <input
            type="text"
            placeholder="Your Name"
            className="search_input mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Your Email "
            className="search_input mb-2 w-full"
          />
          <textarea
            placeholder="Your Message"
            className="search_input mb-2 w-full"
          ></textarea>
          <button className=" w-full text-white py-4 mt-2 rounded-md bg-gradient-to-r from-sky-700 via-blue-500 to-sky-500 ">Send Message</button>
        </form>
      </section>

      <section className=" py-16 text-center">
        <h2 className=" text-2xl max-w-xs mx-auto md:text-3xl font-bold ">
          Ready to take control of your social media?
        </h2>
        <p className="mt-4 text-xl mx-auto max-w-xs ">
          sign up now and start scheduling your posts in minutes.{" "}
        </p>
        <Link
          href="/signup"
          className=" w-3/6 rounded mt-6 inline-block bg-gradient-to-r from-sky-700 via-blue-500 to-sky-500 text-white font-bold py-3 px-6"
        >
          Get Started
        </Link>{" "}
      </section>

      <footer
        className=" w-full flex items-center justify-center h-16
       text-gray-700 "
      >
        &copy; Copyright 2024 - created by Haitham Mohasien full stack developer{" "}
      </footer>
    </div>
  );
};

export default page;
