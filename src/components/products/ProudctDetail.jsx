import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const ProudctDetail = () => {
	const { id } = useParams();
	const { data, loading, error } = useFetch(
		`https://fakestoreapi.in/api/products/${id}`
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	console.log("++++++++++++++++++", data);

	return (
		<div className="p-5 flex flex-row gap-2">
			<div className="w-1/2 align-middle flex justify-center items-center">
				<img
					src={data?.product?.image}
					alt="noimage"
					className="w-64 h-64 object-contain"
				/>
			</div>
			<div className="w-1/2 flex flex-col gap-5">
				<h1 className="font-bold text-3xl ">{data?.product?.title}</h1>
				<h1 className="font-medium text-xl ">
					Color: {data?.product?.color}
				</h1>
				<p>Discount: {data?.product?.discount}%</p>
				<h1 className="font-medium text-2xl ">
					Price: ${data?.product?.price}
				</h1>
				<button className="font-bold p-4 bg-blue-400 text-white shadow-md rounded-sm cursor-pointer w-1/3">
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default ProudctDetail;
