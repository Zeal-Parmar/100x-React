import React from 'react'

function CreateAccountStepII() {
  return (
<div>
  <main className="flex w-full">
    <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
      <div className="flex items-center gap-5 self-stretch py-3">
        <a href="../login/index.html"><img src="/5-Twitter-Layout/images/cancel.svg" />
        </a>
        <p className="text-0.9rem font-bold leading-normal text-Neutral/50">
          Step 2 of 4
        </p>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <h1 className="text-2xl font-bold leading-normal text-Neutral/50">
          Create your account
        </h1>
        <fieldset className="group flex items-center self-stretch rounded border border-solid border-Neutral/500 px-3 py-4 pt-2 focus-within:border-blue-default">
          <legend className="text-xs font-medium not-italic leading-normal text-Neutral/500 group-focus-within:text-blue-default">
            <div className="px-2">Name</div>
          </legend>
          <input type="text" placeholder="Name" className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none" />
        </fieldset>
        <fieldset className="group flex items-center self-stretch rounded border border-solid border-Neutral/500 px-3 py-4 pt-2 focus-within:border-blue-default">
          <legend className="text-xs font-medium not-italic leading-normal text-Neutral/500 group-focus-within:text-blue-default">
            <div className="px-2">Email</div>
          </legend>
          <input type="email" placeholder="Email" className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none" />
        </fieldset>
        <fieldset className="group flex items-center self-stretch rounded border border-solid border-Neutral/500 px-3 py-4 pt-2 focus-within:border-blue-default">
          <legend className="text-xs font-medium not-italic leading-normal text-Neutral/500 group-focus-within:text-blue-default">
            <div className="px-2">Date of Birth</div>
          </legend>
          <input type="text" placeholder="Date of Birth" className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none" />
        </fieldset>
      </div>
    </section>
  </main>
  <footer className="fixed bottom-16 left-1/2">
    <a href="../login/create-account-step-3.html">
      <button className="flex w-[360px] items-center justify-center gap-2.5 rounded-6xl bg-blue-default p-5 hover:bg-blue-hover disabled:opacity-50">
        <span className="text-center text-base font-bold not-italic leading-normal text-Neutral/50">Sign up</span>
      </button>
    </a>
  </footer>
</div>

  )
}

export default CreateAccountStepII