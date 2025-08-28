import React from 'react'

const ProductCard = (product) => {

    const { id, title, image, price } = product.product;

  return (
		<div className="w-full max-w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
			<a href={`/product/${id}`}>
				<img
					className="p-4 rounded-t-lg w-32 h-32 justify-center mx-auto"
					src={image}
					alt={title}
				/>
			</a>
			<div className="px-5 pb-5 ">
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
						{title}
					</h5>
				</a>

				<div className="flex items-center justify-between mt-5">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						${price}
					</span>
					<a
						href="#"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => alert(id)}
					>
						View
					</a>
				</div>
			</div>
		</div>
  );
}

export default ProductCard
