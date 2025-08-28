import RandomIntro from "@/components/RandomIntro";
import RandomImage from "@/components/RandomImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
            정밀 만세력 사주 플랫폼
          </h1>
          <RandomIntro />
          <div className="my-10">
            <RandomImage />
          </div>
          <Link href="/saju">
            <button className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition">
              사주팔자 확인하기
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}