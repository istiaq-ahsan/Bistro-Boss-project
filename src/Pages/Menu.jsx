import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import SectionTitle from "../components/SectionTitle/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuComponent/MenuCategory";
import dessertBg from "../assets/menu/dessert-bg.jpeg"
import pizzatBg from "../assets/menu/pizza-bg.jpg"
import saladBg from "../assets/menu/salad-bg.jpg"
import soupBg from "../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuBg}
                title={"Our Menu"}
            ></Cover>
            <SectionTitle
                subHeading={"Don't Miss"} heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title={"dessert"} coverImg={dessertBg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzatBg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} coverImg={saladBg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;