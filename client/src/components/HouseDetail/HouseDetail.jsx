import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHouseID } from '../../redux/actions/userActions';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import "./HouseDetail.css"

export default function HomeID() {
    const homeDetailed = useSelector((state) => state.userReducer.homeInfo) //userReducer.homeInfo
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
        <div className="all">
            <button className="buton">
                <Link className="link"to="/">Home</Link>
            </button>
            <h1>PRUEBA</h1>
            <div className="container">
              <h1>{homeDetailed.owner}</h1>
              <div className="imgcontainer">
                  <img src={homeDetailed.image} alt="No se encontró la bandera"/>
              </div>
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