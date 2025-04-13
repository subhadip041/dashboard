import { create } from "zustand";
import { ReactNode } from "react";


interface MenuItem {
    name: string;
    route: string;
    icon: ReactNode;
  }

  interface MenuStore {
    menu: MenuItem[];
  }
  export const useMenuStore = create<MenuStore>(() => ({
    
    
    "menu": [
      {
        "name": "Home",
        "route": "/home",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      },
      {
        "name": "Orders",
        "route": "/orders",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M3 3h18M3 9h18M3 15h18M3 21h18' /></svg>
      },
      {
        "name": "Products",
        "route": "/products",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M3 3h18v18H3z' /></svg>
      },
      {
        "name": "Delivery",
        "route": "/delivery",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M2 12h20M5 19l2-2M19 19l-2-2' /></svg>
      },
      {
        "name": "Marketing",
        "route": "/marketing",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M3 10l9-6 9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z' /></svg>
      },
      {
        "name": "Analytics",
        "route": "/analytics",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M4 20h16M4 10h16M4 4h16' /></svg>
      },
      {
        "name": "Payouts",
        "route": "/payouts",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M12 2v20m-7-7h14' /></svg>
      },
      {
        "name": "Discounts",
        "route": "/discounts",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M5 12l7-7 7 7-7 7z' /></svg>
      },
      {
        "name": "Audience",
        "route": "/audience",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M12 5l7 7-7 7-7-7z' /></svg>
      },
      {
        "name": "Appearance",
        "route": "/appearance",
        "icon": <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'><path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' /></svg>
      },
      {
        "name": "Plugins",
        "route": "/plugins",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
      }
    ]
  }));