import { memo } from 'react'

const ItemList = memo(function ItemList({ items }) {
  console.log('ItemList rendered')

  return (
    <ul className="grid max-h-[28rem] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-sm shadow-black/10 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          {item.label}
        </li>
      ))}
    </ul>
  )
})

export default ItemList