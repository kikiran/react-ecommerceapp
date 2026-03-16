import React from 'react'
import { BsCart4 } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
	const url = import.meta.env.VITE_APP_URL;
	const { data, loading, error } = useFetch(`${url}/categories`);

	return (
		<div className="flex items-center justify-between border-b border-solid border-b-[#f4f0f0] px-10 py-3">
			<div className="flex flex-row items-center gap-2">
				<Link to="/">
					<img src="/logo.png" className="w-8 h-8" alt="Vite logo" />
				</Link>
				<h1 className="font-bold text-lg text-[#181111] leading-tight">
					FashionForward
				</h1>
			</div>
			<div className="flex flex-1 justify-end gap-8">
				{data &&
					data?.map((category, index) => (
						<a
							href={`/category/${category}`}
							className="text-[#181111] hover:text-[#3811fc] uppercase font-medium"
							key={index}
						>
							{category}
						</a>
					))}
				<strong className="mt-[-15px] text-blue-600">
					{cart && cart?.length !== 0 && cart?.length}
				</strong>
				<BsCart4 className="w-5 h-5 cursor-pointer absolute" />
			</div>
		</div>
	);
};

export default Header
