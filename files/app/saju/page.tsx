import SajuForm from "@/components/SajuForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SajuPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <SajuForm />
        </div>
      </main>
      <Footer />
    </>
  );
}