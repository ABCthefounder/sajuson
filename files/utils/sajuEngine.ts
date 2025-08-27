export function calculateSaju({ birth, time, gender, calendar }) {
  // 실제 구현에서는 음력 변환, 절기, 60갑자계산 등 포함
  // 여기선 MVP 예시로 단순화
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