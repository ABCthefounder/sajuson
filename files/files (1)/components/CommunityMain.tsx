export default function CommunityMain() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-300 text-center">커뮤니티</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">자유게시판</h3>
          {/* 게시글 리스트 */}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Q&A / 전문가 상담</h3>
          {/* Q&A/상담 리스트 */}
        </div>
      </div>
      {/* 인기글, 추천글, AI 챗봇, 후기, 추천 등 추가 */}
    </div>
  );
}