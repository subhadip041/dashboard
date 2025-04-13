const Home = () => {
    return (
    <div>
        <div className="flex justify-between  gap-2 pb-4">
        <div className="sm:text-xl font-medium"> Overview</div>
            <div>
            <div className="relative max-w-sm">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input id="default-datepicker" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
            </div>
        
            </div>
        <div className="payment-stats  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
                <div className="bg-[#146eb4]  p-4 rounded-t-sm ">
                    <div className="flex gap-2 items-center pb-3">
                        <p className="text-white font-medium">Next payout</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                    </div>
                    <div className="flex justify-between">
                        <div><p className=" text-xl sm:text-3xl font-semibold text-white">₹ 2,312.23</p></div>
                        <div className="flex"><p className="underline text-white">23 Orders</p>
                            <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[#0e4f82] flex text-white px-4 py-1.5 rounded-b-sm justify-between font-light text-sm"> 
                <div>Next payout date:</div>
                <div>Today, 04:00 PM</div>
                </div>
            </div>
            <div className="col-span-1 rounded shadow-md p-5">
                <div className="pb-4">Amount Payout Amount</div>
            <div>
                <div><p className=" text-xl sm:text-3xl font-semibold">₹ 2,312.23</p></div>
            </div>
            </div>
            <div className="col-span-1 rounded shadow-md p-5"><div className="pb-4">Amount Processed</div>
            <div>
                <div><p className=" text-xl sm:text-3xl font-semibold">₹ 23,92,312.19</p></div>
            </div></div>
        </div>

        </div>
    )
}

export default Home