import React, { useRef } from 'react'
import { Footer } from '../main/footer'
import { Table } from './Table'
import { Action } from './ACtion'

export const CheckContact = () => {
  return (
    <section className="w-full max-h-screen overflow-hidden flex flex-col justify-between bg-[#ece5dd] px-10 pt-10 box-border">
      <div className="mx-auto h-[90%] box-border w-full flex flex-col gap-2">
        <Action />
        <Table />
      </div>
      <Footer />
    </section>
  )
}
