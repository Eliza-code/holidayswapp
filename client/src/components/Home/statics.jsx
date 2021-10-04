import React from "react";

import Salta from "../Photographs/statics/salta.jpg"
import Plane from  "../Photographs/statics/plane.png"
import Location from "../Photographs/statics/Location.png"
import navigation from  "../Photographs/statics/navigation.png"
import Cycling from "../Photographs/statics/Cycling.png"
import handHeart from  "../Photographs/statics/handHeart.png"
import regular from  "../Photographs/statics/regular.png"
import handright from  "../Photographs/statics/handright.png"



const Statics =  () => {
    return (
<div>
<div className="sms">
      <div className='staticTitle'>
        <h2>It's official... We're the best home swapping plataform </h2>
      </div>
      </div>
      <div className="motivation">
        <img src={Salta} alt="Salta"  />
        <div className="icons">
          <div className="prayer">
            <img src={Plane} alt="Plane" />
            <h5>Once a year travel to a place you've never been before</h5>
          </div>
          <div className="prayer">
            <img src={navigation} alt="navigation" />
            <h5>
              Don't tell me how old you are or how well educated you are. Tell
              me how much you have traveled and I will tell you how much you
              know
            </h5>
          </div>
          <div className="prayer">
            <img src={Location} alt="Location" />
            <h5>Life is a journey and whoever travels lives twice</h5>
          </div>
          <div className="prayer">
            <img src={Cycling} alt="Cycling" />
            <h5>
              Once the traveling virus bites you, there is no possible antidote
              and I know that I will be happily infected for the rest of my
              life.
            </h5>
          </div>
          <div className="prayer">
            <img src={handright} alt="handright" />
            <h5>
              Those who say it's impossible shouldn't interrupt those of us who
              are trying
            </h5>
          </div>
          <div className="prayer">
            <img src={handHeart} alt="handHeart" />
            <h5>
              In my case, I do not travel to go to a particular place, but to
              go. I travel for the pleasure of traveling. The question is to
              move
            </h5>
          </div>
          <div className="prayer">
            <img src={regular} alt="regular" />
            <h5>
              Travel is part of education in youth and part of experience in old
              age
            </h5>
          </div>
        </div>
      </div>
</div>
    )
}

export default Statics