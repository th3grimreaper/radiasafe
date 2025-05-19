import React from "react";
import Main from "../../constants/Main";
import CarouselImage from "@/components/Carousel/CarouselImage";
import Ratings from "@/components/ratings/Ratings";
import Quantity from "@/components/QuantityButton/Quantity";
import WishlistButton from "@/components/wishlistbutton/WishlistBtn";
import ProductSizes from "@/components/Sizes/ProductSizes";
import CheckPincode from "@/components/Pincode/Pincode";
import MyButton from "@/components/buttons/Button";
import Accordion from "@/components/accordion/Accordion";

const ProductDetails = () => {
  return (
    <Main className="bg-white py-12 text-gray-900">
      <section
        className="md:pl-0 lg:pl-40 flex flex-col lg:justify-center lg:items-center"
        style={{
          gap: "clamp(1rem,50%,4rem)",
        }}
      >
        <div className="flex flex-col lg:flex-row">
          <CarouselImage />
          <div className="productDetails max-w-[100%] px-12 lg:px-0 lg:max-w-[50%] flex flex-col flex-1 justify-start">
            <div className="text-gray-900 font-sans text-2xl font-bold">
              Product Name
            </div>
            <div>
              <Ratings />
              <div>
                $119.0{" "}
                <span className=" line-through text-gray-400">$200.0</span>
              </div>
            </div>
            <div className="w-[100%] lg:w-3/5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                consectetur nemo maxime inventore at neque laudantium itaque
                nulla, tempora tempore necessitatibus atque placeat vitae sequi
                suscipit nesciunt corporis quae. Voluptas.
              </p>
              <div className="flex gap-4">
                <Quantity />
                <WishlistButton />
              </div>
            </div>
            <div className="py-4">
              <p className="text-gray-600 pb-2">Select Size</p>
              <ProductSizes />
            </div>
            <div className="btnWrapper flex gap-4 pb-4">
              {/* <Button className="text-white">Add to Cart</Button>
            <Button className="text-white">Buy Now</Button> */}
              <MyButton name={"Add to Cart"} type={"submit"} />
              <MyButton name={"Buy Now"} type={"submit"} />
            </div>
            <div className="">
              <CheckPincode />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 self-stretch lg:self-start">
            <Accordion />
        </div>
      </section>
    </Main>
  );
};

export default ProductDetails;
