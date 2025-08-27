import Image from "next/image";
export default function RandomImage() {
  const images = [
    "/saju_1.jpg",
    "/saju_2.jpg",
    "/saju_3.jpg",
  ];
  const img = images[Math.floor(Math.random() * images.length)];
  return (
    <Image
      src={img}
      alt="사주 명리학 분위기"
      width={400}
      height={250}
      className="rounded-xl shadow-lg mx-auto"
      priority
    />
  );
}