import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div
                className="hero min-h-screen"
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="bg-opacity-50 bg-gray-800 h-[300px] w-[600px] 
                    flex flex-col justify-center items-center">
                        <h1 className=" text-5xl uppercase font-bold">{title}</h1>
                        <p className="">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;