import cardimg from "../src/img/maincard.png";
import man1 from "../src/img/man1.png";
import { AiOutlineStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
const card = (
  <>
  <div className=" w-11/12  shadow-xl relative cursor-pointer  ">
            <figure>
              <img className="w-full" src={cardimg} alt="Shoes" />
            </figure>
            <div className="avatar absolute bottom-[155px] left-[24px]">
              <div className="w-[60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={man1} alt="" />
              </div>
            </div>
            <div className="bg-[#e5e7eb;] p-2">
              <div className="ml-2 mt-[25px] p-1">
                <div className="flex gap-2 text-white">
                  <p className=" bg-orange-500 p-0.5 rounded-sm text-xs ">
                    Bangladesh
                  </p>
                  <p className="bg-orange-500 p-0.5  rounded-sm text-xs">
                    Pakistan
                  </p>
                </div>
                <p className="text-1xl text-indigo-700">Bangladesh</p>
                <h3>Tailwind center an absolute element</h3>
                <div className="flex">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h2 className="text-1xl">
                  By <span className=" text-indigo-700">bangladesh</span>
                </h2>
                <h2>Dhaka Bangladesh</h2>
              </div>
            </div>
          </div>
  </>
)

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative ">
      <div className=" pointer-events-none active w-[295px] shshadow-2xl z-50 opacity-70  ml-[42px] absolute  bg-[#716c6b]  h-[475px] "></div>
      <div className=" pointer-events-none w-[295px]  shadow-2xl z-50 opacity-70   ml-[1002px] absolute  bg-[#716c6b]  h-[475px]   "></div>

      <Slider className="container mx-auto mt-10  " {...settings}>
        <div>
          {card}
        </div>
        <div>
          {card}
        </div>
        <div>
        {card}
        </div>
        <div>
        {card}
        </div>
        <div>
        {card}
        </div>
      </Slider>
    </div>
  );
}

export default App;
