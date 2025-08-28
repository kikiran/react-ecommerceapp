import React from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from './ProductCard';

const ProductList = () => {

    const { data, loading, error } = useFetch(
		"https://fakestoreapi.in/api/products"
	);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <p>Error: {error.message}</p>;

 

  return (
		<div className="px-5 py-3 flex flex-wrap gap-2 text-justify">
			{data &&
				data?.products?.map((product) => (
					<ProductCard key={product?.id} product={product}  />
				))}
		</div>
  );
}

export default ProductList


{/* <ProductCard key={product?.id}  id={product?.id} title={product?.title} image={product?.image} price={product?.price} /> */}