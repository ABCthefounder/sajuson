import { LunarSolarConverter } from "lunar-solar";

export async function lunarToSolar(birthData) {
  const converter = new LunarSolarConverter();
  const lunar = {
    lunarYear: birthData.year,
    lunarMonth: birthData.month,
    lunarDay: birthData.day,
    isLeap: false,
  };
  const solar = converter.lunarToSolar(lunar);
  return { ...birthData, year: solar.solarYear, month: solar.solarMonth, day: solar.solarDay, calendarType: "solar" };
}

// calculateSaju는 기존 JS 로직 활용