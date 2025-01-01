import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-3 my-10 gap-5">
            {
                items.map(item => <FoodCard
                    key={item._id} item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;