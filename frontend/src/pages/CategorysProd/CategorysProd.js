import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ItemDisplay from "../../Components/ItemDisplay/ItemDisplay";

const CategorysProd = () => {
    const location = useLocation();

    const { products } = useSelector((state) => state.products);

    const [listData, setListData] = useState([]);

    useEffect(() => {
        const result = products?.filter((item) => item?.idCategory === location?.state?.id);
        setListData(result);
    }, [location?.state?.id, products]);

    return (
        <div className='box_displays__product-medium-list row'>
            {listData?.map((item) => {
                return <ItemDisplay key={item.id} item={item} sLeft={2} />;
            })}

            <div name='last-product'></div>
        </div>
    );
};

export default CategorysProd;
