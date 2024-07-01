import React, { useState } from 'react'

interface Props {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: Props) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

  return (
    <div className="py-2">
      <button className="flex justify-between w-full text-lg gap-x-2"
        onClick={() => setAccordionOpen(!accordionOpen)}>
        <span className="text-left font-semibold">{question}</span>
        {!accordionOpen ? <span className="text-xl">+</span> : <span className="text-xl">-</span>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600
      ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden ">
          {answer}
        </div>
      </div>
    </div>
  )
}
