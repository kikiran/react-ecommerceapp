import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/products/ProductCard';

const CategoryPage = () => {
    const {categoryName} = useParams();
    const { data, loading, error } = useFetch(
		`https://fakestoreapi.in/api/products/category?type=${categoryName}`
	);

    
    if (loading) return <h1>Loading...</h1>;
	if (error) return <p>Error: {error.message}</p>;

  return (
		<div className="px-5 py-3 flex flex-wrap gap-5 text-justify">
			{data &&
				data?.products?.map((product) => (
					<ProductCard key={product?.id} product={product} />
				))}
		</div>
  );
}

export default CategoryPage
