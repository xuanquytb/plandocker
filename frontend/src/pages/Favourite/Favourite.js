import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemDisplay from "../../Components/ItemDisplay/ItemDisplay";

const Favourite = () => {
    const { favourite } = useSelector((state) => state.favourite);

    return (
        <div className='box_displays__product-medium-list row'>
            {favourite?.map((item) => {
                return <ItemDisplay key={item.id} item={item} sLeft={2} />;
            })}

            <div name='last-product'></div>
        </div>
    );
};

export default Favourite;
