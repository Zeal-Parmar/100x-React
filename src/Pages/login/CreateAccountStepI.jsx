import React from 'react'
import Button from '../../Components/Button'; 

function CreateAccountStepI() {
  return (
    <div className='bg-Neutral/1000'>
  <main className="flex w-full gap-5 bg-Neutral/1000">
    <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5 bg-Neutral/1000">
      <div className="flex items-center gap-5 self-stretch py-3">
        <a href="../login/index.html"><img src="/5-Twitter-Layout/images/cancel.svg" />
        </a>
        <p className="text-0.9rem font-bold leading-normal text-Neutral/50">
          Step 1 of 4
        </p>
      </div>
      <div className="flex flex-col items-start gap-5 self-stretch">
        <h1 className="text-2xl font-bold leading-normal text-Neutral/50">
          Create your account
        </h1>
        <fieldset className="group flex items-center border rounded border-solid border-Neutral/500 px-3 py-4 pt-2 focus-within:border-blue-default">
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
        <div className="flex flex-col items-start gap-2 self-stretch">
          <h3 className="text-0.9rem font-bold leading-normal text-Neutral/50">
            Date of birth
          </h3>
          <p className="text-sm font-normal leading-normal text-secondary text-Neutral/500">
            This will not be shown publicly. Confirm your own age, even if
            this account is for a business, a pet, or something else.
          </p>
        </div>
        {/* Date Picker */}
        <section className="grid w-full grid-cols-4 gap-3">
          <fieldset className="group col-span-2 rounded border border-Neutral/500 px-3 pb-4 pt-2 focus-within:border-blue-default">
            <legend className="text-xs font-medium text-Neutral/50 group-focus-within:text-blue-default">
              <div className="px-1">Month</div>
            </legend>
            <select placeholder="Month" className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            {/* <input type="text" placeholder="Select month" class="w-full bg-transparent focus:outline-none text-neutral-50 placeholder:text-neutral-500"> */}
          </fieldset>
          <fieldset className="group rounded border border-Neutral/500 px-3 pb-4 pt-2 focus-within:border-blue-default">
            <legend className="text-xs font-medium text-Neutral/500 group-focus-within:text-blue-default">
              <div className="px-1">Day</div>
            </legend>
            <select className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
          </fieldset>
          <fieldset className="group rounded border border-Neutral/500 px-3 pb-4 pt-2 focus-within:border-blue-default">
            <legend className="text-xs font-medium text-Neutral/500 group-focus-within:text-blue-default">
              <div className="px-1">Year</div>
            </legend>
            <select className="w-full bg-transparent text-Neutral/50 placeholder:text-Neutral/500 focus:outline-none">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
            </select>
          </fieldset>
          <div className="bg-Neutral/1000 fixed bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 transform gap-5">
    <a href="/5-Twitter-Layout/src/login/create-account-step-2.html">
      <button className="flex w-20.8rem items-center justify-center gap-2.5 bg-Neutral/50 px-6 py-2 shadow-3xl backdrop-blur-23.66 hover:bg-Neutral/200 disabled:opacity-50">
        <span className="text-center text-base font-bold not-italic leading-normal text-Neutral/1000">Create account</span>
      </button>
    </a>
  </div>
        </section>
      </div>
    </section>
  </main>
</div>

  )
}

export default CreateAccountStepI