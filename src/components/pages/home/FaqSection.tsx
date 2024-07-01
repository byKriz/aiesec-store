import React from 'react'
import { Accordion } from './Accordion'
import {faqList} from '../../../consts/faqList'

export function FaqSection() {
  return (
    <section className="w-full min-h-[400px] bg-gray-200 px-6 py-8 flex flex-col items-center gap-y-4 md:px-10">
      <h2 className="text-4xl lg:text-5xl font-bold text-center">Preguntas frecuentes</h2>
      <div className="w-full flex flex-col gap-4 bg-white p-4 rounded-md max-w-[1000px]">
        {faqList.map((item, index) => (
          <Accordion question={item.question} answer={item.answer} key={index} />
        ))}
      </div>

    </section>
  )
}
