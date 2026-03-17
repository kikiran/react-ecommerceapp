import React from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from './ProductCard';

const ProductList = () => {

		const url = import.meta.env.VITE_APP_URL;
		const finalURL = `${url}/products`;

		const { data, loading, error } = useFetch(finalURL);

		if (loading) return <h1>Loading...</h1>;
		if (error) return <p>Error: {error.message}</p>;

		return (
			<div className="px-5 py-3 flex flex-wrap gap-5 text-justify">
				{data &&
					data?.map((product) => (
						<ProductCard key={product?.id} product={product} />
					))}
			</div>
		);
}

export default ProductList


{/* <ProductCard key={product?.id}  id={product?.id} title={product?.title} image={product?.image} price={product?.price} /> */}