import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/menuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');



    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Item"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View All Menu</button>
        </section>
    );
};

export default PopularMenu;