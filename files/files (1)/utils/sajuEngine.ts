export function calculateSaju({ birth, time, gender, calendar, city }) {
  // 실제 구현: 음력 변환, 동경시, 야자시 등 보정 포함
  // MVP 예시
  const pillars = [
    { chinese: "甲子", korean: "갑자", detail: "목/수, 쥐띠" },
    { chinese: "乙丑", korean: "을축", detail: "목/토, 소띠" },
    { chinese: "丙寅", korean: "병인", detail: "화/목, 호랑이" },
    { chinese: "丁卯", korean: "정묘", detail: "화/목, 토끼" },
  ];
  return {
    pillars,
    summary: "이 사주는 오행의 균형이 좋으며, 성장과 변화에 강점이 있습니다."
  };
}