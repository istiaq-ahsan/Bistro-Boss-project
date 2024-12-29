import SectionTitle from "../../components/SectionTitle/SectionTitle";

import featuredImage from "../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
                heading={"Featured Item"}
                subHeading={"Check it Out"}
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20 ,2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus aut itaque nemo asperiores repellendus non
                        praesentium sunt, officia id veritatis odio commodi at
                        repudiandae distinctio, iure vitae sed rerum. Ut
                        quibusdam nemo velit quae neque voluptatum debitis
                        et quos, alias vitae itaque inventore laborum laboriosam
                        libero perspiciatis repudiandae, ducimus architecto.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;