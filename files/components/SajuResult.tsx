import { calculateSaju } from "@/utils/sajuEngine";

export default function SajuResult({ params }) {
  const result = calculateSaju(params);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-300">
        사주 명반 결과
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
        {result.pillars.map((pillar, i) => (
          <div key={i} className="flex flex-col items-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow">
            <span className="text-4xl font-bold mb-2">{pillar.chinese}</span>
            <span className="text-lg font-medium">{pillar.korean}</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">{pillar.detail}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <span className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">{result.summary}</span>
      </div>
    </div>
  );
}