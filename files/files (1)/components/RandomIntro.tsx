const intros = [
  "운명은 선택보다 해석, 나만의 사주로 삶의 방향을 찾아보세요.",
  "정밀 만세력으로 오늘의 운세와 미래를 예측해보세요.",
  "사주명리학, 동양의 지혜로 내 인생을 디자인합니다.",
  "사주팔자, 오행, 띠, 계절까지 모두 반영한 과학적 명리 해석!",
];
export default function RandomIntro() {
  const text = intros[Math.floor(Math.random() * intros.length)];
  return <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{text}</p>;
}