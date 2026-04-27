import { useState } from 'react'
import ItemList from './components/ItemList'
import { items } from './data/items'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
            React memo demo
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            1,000-item List
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Open DevTools console and click the counter button. The list should not re-render.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium text-white">Counter: {counter}</p>
          <button
            type="button"
            onClick={() => setCounter((value) => value + 1)}
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Increment Counter
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 sm:p-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
            Items
          </p>
          <ItemList items={items} />
        </div>
      </div>
    </main>
  )
}

export default App
