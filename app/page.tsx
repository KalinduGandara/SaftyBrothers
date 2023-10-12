import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <div className='flex content-between'>
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary mx-1">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
    </main>
  )
}
