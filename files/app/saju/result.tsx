import SajuResult from "@/components/SajuResult";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SajuResultPage({ searchParams }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen py-12 bg-gradient-to-tr from-white via-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full max-w-2xl">
          <SajuResult params={searchParams} />
        </div>
      </main>
      <Footer />
    </>
  );
}