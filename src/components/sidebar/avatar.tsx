const Avatar = ()=>{
    return(
        <div className="flex justify-between">
            <div className="flex gap-3.5 items-center">
                <div>
                <img src="https://dukaaan-app-ui.vercel.app/assets/avatar--MnDm4gU.png"  className="rounded h-10" />
                </div>
                <div>
                    <h1 className="h-3.8 leading-5.5 text-white-500 font-inter font-medium text-white">Subhadip</h1>
                    <p className="leading-4 h-4 underline font-normal text-white">Visit store</p>
                </div>
                </div>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white ml-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
                </button>
                </div>
    )
}

export default Avatar