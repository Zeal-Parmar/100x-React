import React from 'react'

function ForyouAndFollowing() {
  return (
    <section className=" flex pt-5 px-20 pb-0 justify-around items-center gap-40 self-stretch border-b border-Neutral/700 ">
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full hover:bg-Neutral/800 ">
      <p className="font-inter text-4 not-italic font-bold leading-normal text-Neutral/50">For&nbsp;you</p>
      <div className="rounded-full bg-blue-default w-14 h-1" /> </div>
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full hover:bg-Neutral/800 ">
      <p className="font-inter text-4 not-italic font-medium leading-normal text-Neutral/400">Following</p>
      <div className="rounded-full bg-blue-default w-14 h-1 invisible" />
    </div>
  </section>
  )
}

export default ForyouAndFollowing