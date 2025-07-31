
import React from "react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f3] to-[#f1ece7] text-gray-800 p-6">
      <section className="max-w-5xl mx-auto py-12 text-center">
        <h1 className="text-5xl font-bold mb-4">链阅阁 · 中文链上图书馆</h1>
        <p className="text-lg mb-6 text-gray-600">
          知识可以确权，阅读可以激励。
        </p>
        <button className="text-lg px-8 py-4 rounded-2xl shadow-md bg-red-500 text-white">
          加入我们（即将开放）
        </button>
      </section>
    </main>
  );
}
