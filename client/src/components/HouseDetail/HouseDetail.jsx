import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHouseID } from '../../redux/actions/postActions';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import images from './Images.js'
import "./HouseDetail.css"
import Announcements from '../CityReservation/Announcements'
import Header from '../Header/Header';

/*const languagues = [
    {
        language: "English",
        Images: img2
    },
{
    language: "Spanish(L)",
    Images: img3
}]*/

export default function HomeID() {
    const homeDetailed = useSelector((state) => state.postReducer.homeInfo) //userReducer.homeInfo
    const dispatch = useDispatch();
    const {id} = useParams();
    //const id = params.id;
    useEffect(() => {
        dispatch(getHouseID(id));
    },[dispatch, id]);
    console.log(id)
    console.log(homeDetailed, "Detalle del Hogar")
    return (
        <div>
            <div className='headerNav'>
                <Header/>
            </div>
            <div className="user-info">
            {homeDetailed && homeDetailed.image ? (
                <div className="imgcontainer">
                <img src={homeDetailed?.image[0]}/> 
                </div>) : <img alt="Home not Found"/>}
                <div className="users">
                    <div className="imgowner">
                        <img src={images.img1}/>
                        <div className="owner">
                        <h3>{homeDetailed.owner}</h3>
                        </div>
                        <div className="lang"><h2>Languages Spoken</h2>
                        </div>
                        <div className="flag1">
                        <img src={images.img2}/>
                        <h2 className="slang">English</h2>
                        </div>
                        <div className="flag2">
                        <img src={images.img3}/>
                        <h2 className="slang2">Spanish</h2>
                        </div>
                        <div className="ratings"><h1>Ratings : 8</h1>
                        </div>
                        <div className="starY">
                        <img src={images.img4}/>
                        <img src={images.img4}/>
                        <img src={images.img4}/>
                        <img src={images.img4}/>
                        <img src={images.img5}/>
                        </div>
                        <div>
                           <p className="user-description">I'm a person with such like to share my culture and language</p>
                        </div>
                        <div className="review-user">
                            <img src={images.img24}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="announce-title">
                    <div className="announce-owner">
                        <h1>{homeDetailed.title}</h1>
                        </div>
                </div>
                {homeDetailed && homeDetailed.image ? (
                <div className="announce-rooms">
                    <img src={homeDetailed?.image[1] } />
                    <img src={homeDetailed?.image[2]}/>
                </div> ) : <img alt="Home not Found"/>}
            </div>
            <div className="announce-description">
                <h1 className="announce-house-description-title">Home's description</h1>
               <h2 className="announce-house-description">{homeDetailed.description}</h2>
               <div className="announce-house-info">
                       <h3>Country:{homeDetailed.country}</h3>
                       <h3>State:{homeDetailed.state}</h3>
                       <h3>City:{homeDetailed.city}</h3>
               </div>
            </div>
            <div className="rules-calendly">
                <div className="rules-amenities">
                    <h1 className="amenity">
                        Amenities
                    </h1>
                    <div className="amenity-logos">
                        <div className="amenity-descr">
                        <img className="logos"src={images.img6}/>
                        <p>Bath {homeDetailed.bathrooms}</p>
                        </div>
                        <div className="amenity-descr">
                        <img className="logos"src={images.img7}/>
    <p>Beds {homeDetailed.bedrooms}</p>
                        </div>
                        {homeDetailed && homeDetailed.washing_machine === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img8}/>
    <p>Washing Machine YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img8}/>
    <p>Washing Machine NO</p>
    </div>}
                        <div className="amenity-descr">
                        <img className="logos"src={images.img9}/>
    <p>Type {homeDetailed.type}</p>
                        </div>
                        {homeDetailed && homeDetailed.fridge === true ? (<div className="amenity-descr">
                        <img className="logos"src={images.img10}/>
    <p>Fridge YES</p>
                        </div> ) : <div>
                        <img className="logos"src={images.img10}/>
                        <p>Fridge NO</p>
                        </div>
                        }
                        {homeDetailed && homeDetailed.private_parking === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img11}/>
    <p>Parking YES</p> 
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img11}/>
    <p>Parking NO</p> 
                        </div>}
                        <div className="amenity-descr">
                        <img className="logos"src={images.img12}/>
    <p>Bedrooms {homeDetailed.bedrooms}</p>
                        </div>{homeDetailed && homeDetailed.tv === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img13}/>
                        <p>TV YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img13}/>
                        <p>TV NO</p>
                        </div>} {homeDetailed && homeDetailed.wifi ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img14}/>
                        <p>Wifi YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img14}/>
                        <p>Wifi NO</p>
                        </div>}
                        <div className="amenity-descr">
                        <img className="logos"src={images.img15}/>
    <p>Points {homeDetailed.points}</p>
                        </div>
                    </div>
                    <h1 className="amenity">Rules</h1>
                    <div className="rules-logos">
                    {homeDetailed && homeDetailed.a_c === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img22}/>
                        <p>Couple YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img22}/>
                        <p>Couple NO</p>
                        </div>}
                        {homeDetailed && homeDetailed.childremWelcome === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img21}/>
                        <p>Allowed Children YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img21}/>
                        <p>Allowed Children NO</p>
                        </div>}
                        {homeDetailed && homeDetailed.smokersWelcome === true ? (
                        <div className="amenity-descr">
                        <img className="logos"src={images.img17}/>
                        <p>Smoking YES</p>
                        </div> ) : 
                        <div className="amenity-descr">
                        <img className="logos"src={images.img17}/>
                        <p>Smoking NO</p>
                        </div>}
                        <div className="Agend">
                    <h1>Agend US</h1>
                </div>
                </div>
                <div>
                    <img className="calendar" src={images.img23}/>
                </div>
                </div>
            </div>
            <div className="places">
        <h3>Places you may like</h3>
      </div>
      <div>
        <Announcements />
      </div>
        <div>
                     <Footer/>
                 </div>
        </div>
    )
}