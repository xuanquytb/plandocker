import React from "react";
import { useSelector } from "react-redux";
import ItemDisplay from "../../Components/ItemDisplay/ItemDisplay";

const Search = () => {
    const { productsSearch } = useSelector((state) => state.products);

    return (
        <div className='box_displays__product-medium-list row'>
            {productsSearch?.map((item) => {
                return <ItemDisplay key={item.id} item={item} sLeft={2} />;
            })}

            <div name='last-product'></div>
        </div>
    );
};

export default Search;
