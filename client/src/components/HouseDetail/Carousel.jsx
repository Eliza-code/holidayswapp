import React from "react";
import { Carousel } from "react-carousel-minimal";

const CustomCarousel = (props) => {
    const data = props.images.map((elem) => ({ image: elem }));

    return (
      <React.Fragment>
          <Carousel
            {...props}
            data={data}
            automatic={true}
            time={5000}
            radius="5px"
            dots={true}
            slideImageFit="cover"
            slideBackgroundColor="darkgrey"
            style={{
              textAlign: "center",
              maxHeight: "100vh",
            }}
          />
      </React.Fragment>
    );
};
  
export default CustomCarousel;