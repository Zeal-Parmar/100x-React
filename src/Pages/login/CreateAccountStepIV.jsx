import React from 'react'

function CreateAccountStepIV() {
  return (
  <div>
  <main className="flex w-full">
    <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
      <div className="flex items-center gap-5 self-stretch py-3">
        <a href="../login/index.html"><img src="/5-Twitter-Layout/images/cancel.svg" />
        </a>
        <p className="text-0.9rem font-bold leading-normal text-Neutral/50">
          Step 4 of 4
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 self-stretch">
        <div className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-start gap-3 self-stretch">
            <h1 className="text-2xl font-bold leading-normal text-Neutral/50">
              You’ll need a password
            </h1>
            <p className="text-sm font-normal leading-normal text-Neutral/500">
              Make sure it’s 8 characters or more
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <fieldset className="group flex items-center self-stretch rounded border border-solid border-Neutral/500 px-3 py-4 pt-2 focus-within:border-blue-default">
            <legend className="text-xs font-medium not-italic leading-normal text-Neutral/500 group-focus-within:text-blue-default">
              <div className="px-2">Password</div>
            </legend>
            <input type="password" placeholder="Password" className=" bg-transparent text-neutral/50 placeholder:text-Neutral/500 focus:outline-none" />
            <img src="/5-Twitter-Layout/images/visible-t.svg" />
          </fieldset>
        </div>
      </div>
    </section>
  </main>
  <footer className=" flex justify-center bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <a href="../home-feed/index.html">
      <br />
      <button className="flex justify-center  gap-2.5 border rounded-full bg-Neutral/50 px-6 py-2 shadow-3xl backdrop-blur-23.66 hover:bg-Neutral/200 disabled:opacity-50">
        <span className="text-center text-base font-bold not-italic leading-normal text-Neutral/1000">Next</span>
      </button>
    </a>
  </footer>
</div>

  )
}

export default CreateAccountStepIV