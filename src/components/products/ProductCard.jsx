import React from 'react'

const ProductCard = (product) => {

    const { id, title, image, price } = product.product;

  return (
		<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<a href={id}>
				<img
					class="p-4 rounded-t-lg w-32 h-32 justify-center mx-auto"
					src={image}
					alt={title}
				/>
			</a>
			<div class="px-5 pb-5 ">
				<a href="#">
					<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
						{title}
					</h5>
				</a>

				<div class="flex items-center justify-between mt-5">
					<span class="text-3xl font-bold text-gray-900 dark:text-white">
						${price}
					</span>
					<a
						href="#"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => alert(id)}
					>
						Add to cart
					</a>
				</div>
			</div>
		</div>
  );
}

export default ProductCard
