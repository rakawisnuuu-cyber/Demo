export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Demo App</h1>
        <p className="text-gray-400 text-lg mb-8">Next.js + Tailwind + n8n</p>
        <div className="flex gap-4 justify-center">
          <a href="https://n8n.srv1272332.hstgr.cloud" target="_blank" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">Open n8n</a>
          <a href="https://github.com/rakawisnuuu-cyber/Demo" target="_blank" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors">View Source</a>
        </div>
      </div>
    </main>
  )
}