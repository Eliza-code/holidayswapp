import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getHouseID } from '../../redux/actions/userActions';
import "./HouseDetail.css"

export default function HomeID() {
    const homeDetailed = useSelector((state) => state.userReducer.homeInfo) //userReducer.homeInfo
    const dispatch = useDispatch();
    const id = useParams();
    useEffect(() => {
        dispatch(getHouseID(id));
    }, [dispatch, id]);
    console.log(id, `${id}`)
    console.log(homeDetailed, "Detalle del país")
    /*const array = [] 
    for(let i in CountryDetailed.activities) {
        array.push(CountryDetailed.activities[i]["Nombre"])
    }*/
    return (
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
        </div>
    )
}