import React from "react";

/*
  Card used on landing. Keeps shape, title and three small feature items.
*/
export default function HeroCard({ quote }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8 text-left mx-2" style={{ borderRadius: "24px" }}>
      <h3 className="text-3xl font-extrabold text-orange-800 mb-3">Welcome home, gentle soul</h3>
      <p className="text-orange-700/80 mb-6">
        Here, you can write without judgment, reflect without pressure, and grow at your own pace. Your AI friend is here to listen, understand, and gently guide you through your thoughts.
      </p>

      <div className="flex gap-6 text-orange-600 mb-6">
        <div className="flex items-center gap-2"><span>📓</span><span>Safe Journaling</span></div>
        <div className="flex items-center gap-2"><span>❤️</span><span>AI Companion</span></div>
        <div className="flex items-center gap-2"><span>📈</span><span>Growth Tracking</span></div>
      </div>

      <div className="pt-4 border-t border-orange-50 text-orange-600">
        <div className="text-sm italic">Autumn note</div>
        <div className="mt-2 text-sm text-orange-800">{quote}</div>
      </div>
    </div>
  );
}
