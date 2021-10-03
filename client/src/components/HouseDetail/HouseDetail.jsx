import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHouseID } from '../../redux/actions/postActions';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import images from './Images.js'
import "./HouseDetail.css"

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
            <div>
                <NavBar/>
            </div>
            <div className="user-info">
                <div className="imgcontainer">
                <img src={homeDetailed.image} alt="Home not Found"/>
                </div>
                <div className="users">
                    <div className="imgowner">
                        <img src={images.img1}/>
                        <div className="owner">
                        <h1>{homeDetailed.owner}</h1>
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
                    </div>
                </div>
            </div>
        <div className="all">
            <button className="buton">
                <Link className="link"to="/">Home</Link>
            </button>
            <h1>PRUEBA</h1>
            <div className="container">
              <h1>{homeDetailed.owner}</h1>
              <div className="table">
                 <h3>Country {homeDetailed.country}</h3>
                 <h3>State {homeDetailed.state}</h3>
                 <h3>City {homeDetailed.city}</h3>
                 <h3>{homeDetailed.description}</h3>
                 </div>
            </div>
            <div>
                     <Footer/>
                 </div>
        </div>
        </div>
    )
}