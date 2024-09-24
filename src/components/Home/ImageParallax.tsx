import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import vertical1 from "../../assets/vertical1.jpg";
import vertical2 from "../../assets/vertical2.jpg";
import vertical3 from "../../assets/vertical3.jpg";
import Header from "../shared/Title";
const ImageParallax = () => {
  return (
    <div className="py-10 ">
      <Header header="Our Satiesfied client" description="" />
      <div className="grid grid-cols-2 gap-4 pt-10 mx-auto max-w-7xl md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img className="h-full max-w-full rounded-lg" src={image1} alt="" />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image2} alt="" />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image3} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-full max-w-full rounded-lg" src={image4} alt="" />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={vertical1}
              alt=""
            />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image5} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={vertical2}
              alt=""
            />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image5} alt="" />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image6} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-full max-w-full rounded-lg" src={image7} alt="" />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={vertical3}
              alt=""
            />
          </div>
          <div>
            <img className="h-full max-w-full rounded-lg" src={image8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageParallax;
