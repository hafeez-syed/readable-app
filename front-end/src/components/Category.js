import React from 'react';

const Category = (categories) => {
	const allCategories = [categories.categories];
	return (
		<div className="single-category">
			i'm single category {allCategories}
		</div>
	)
};

export default Category;