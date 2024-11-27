import React from 'react'
import { Link } from 'react-router-dom'

const DATA = [
  {
    title: "Project Title",
    timeLeft: "2 days 4 hours 18 minutes",
    status: "remain",
    id: '1',
  },
  {
    title: "Project Title",
    timeLeft: "2 days 4 hours 18 minutes",
    status: "not",
    id: '2',
  },
  {
    title: "Project Title",
    timeLeft: "2 days 4 hours 18 minutes",
    status: "not",
    id: '3',
  },
  {
    title: "Project Title",
    timeLeft: "2 days 4 hours 18 minutes",
    status: "over",
    id: '4',
  },
]

export default function Projects() {

  const btnClass = `px-4 py-2 rounded-2xl border-1 border-black text-xl text-[#1D1B44] shadow-[0px_1.95px_0px_2.44px_#1F1F1F] `;

  const projectItem = (item) => (
    <div className={`flex justify-between items-center bg-white py-4 px-8 rounded-2xl border border-black ${item.status === 'over' ? 'bg-[#FFDEDC] border-[#FF0000]': ''}`} key={item.id}>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-bold'>{item.title}</h1>
        {item.status !== 'not' && <p className='text-base'>{item.status === 'remain' ? `Time remaining: ${item.timeLeft}` : `Over Deadline: ${item.timeLeft}`}</p>}
      </div>
      <div className='actions flex gap-4'>
        {
          item.status === 'not' && <>
            <button className={`${btnClass} bg-white`}>Edit</button>
            <button className={`${btnClass} bg-white`}>Share Link</button>
          </>
        }
        <Link to={`/detail/${item.id}`} className={`${btnClass} bg-[#50F8D0] `}>View</Link>
      </div>
    </div>
  )

  return (
    <div className='container mx-auto'>
      <div className='px-8 py-4 flex justify-between'>
        <h1 className='text-4xl font-bold'>My Deadlines</h1>
        <Link to={'/create'} className={`${btnClass} bg-[#50F8D0] `}>Create Deadline</Link>
      </div>
      <div className='mt-8 px-8 py-4 flex flex-col gap-8'>
        {DATA.map(projectItem)}
      </div>
    </div>
  )
}
