import { Link } from "react-router-dom";

const Sidemenu = ({ menuData, isExpanded }: { menuData: { menu: any[] }; isExpanded: boolean }) => {
  return (
    <div>
      <ul>
        {menuData.menu.map((data, index) => (
          <li key={index} className="rounded-lg">
            <Link
              to={data.route}
              className="flex items-center p-2 my-1.5 rounded-lg dark:text-white hover:bg-[#fffc]/10 hover:text-white group gap-3.5 text-white"
            >
              {data.icon} 
              <span className={`${isExpanded ? "block" : "hidden"} transition-all duration-300`}>
                {data.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Available Credits Section */}
      <div className="bg-[#fffc]/10 p-2 rounded-lg mt-10 flex gap-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
        </svg>

        <div className={`${isExpanded ? "block" : "hidden"} transition-all duration-300`}>
          <p className="text-xs font-normal text-white">Available Credits</p>
          <p className="text-base font-medium text-white">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
