import NavBar from "../components/Header";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "content scheduler",
  description: "schedule your content easily with our custom scheduler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main"></div>

        <main className="container mx-auto app">
          {" "}
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
