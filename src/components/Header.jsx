import React from 'react'
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
		<div className="flex items-center justify-between border-b border-solid border-b-[#f4f0f0] px-10 py-3">
			<div className="flex flex-row items-center gap-2">
				<img src="/logo.png" className="w-8 h-8" alt="Vite logo" />
				<h1 className="font-bold text-lg text-[#181111] leading-tight">
					FashionForward
				</h1>
			</div>
			<div className="flex flex-1 justify-end gap-8">
				<a href="#" className="text-[#181111] hover:text-[#3811fc]">
					Home
				</a>
				<a href="#" className="text-[#181111] hover:text-[#3811fc]">
					About
				</a>
				<a href="#" className="text-[#181111] hover:text-[#3811fc]">
					Contact
				</a>
				<BsCart4 className='w-5 h-5 cursor-pointer' />
			</div>
		</div>
  );
}

export default Header
