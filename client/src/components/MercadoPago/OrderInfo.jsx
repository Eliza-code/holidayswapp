
import {  useState } from "react";
import { 
  Accordion, 
  AccordionSummary, 
  Typography, 
  AccordionDetails,
  makeStyles,
} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    boxShadow: "0px 0px 0px",
    width: "100%",
    background: "#ced4da",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    display: "flex"
  },
  paperContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: "max-content",
    minHeight: "100%",
    height: "100%",
    marginBottom: "30px"
  },
  paperDetails: {
    height: "95%",
    width: "95%",
    margin: "auto",
    background: "#ced4da"
  },
  product: {
    borderBottom: "1px solid #ddd"
  },
  heading: {
    margin: "2px 0 0 6px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  text: {
    position: "relative",
    "&:hover": {
        zIndex: 1,
        "& $imageMarked": {
        width: "calc(80%)",
        left: "calc(10%)",
        transition: 'all 0.35s ease-out',
        },
    }
    },
  imageTitle: {
    position: "relative",
    width: '70px',
    padding: `${theme.spacing(1)}px ${theme.spacing(0)}px ${
        theme.spacing(1) + 2
    }px`,
    fontFamily: 'Montserrat',
    fontWeight: '500'
    },
    imageMarked: {
       height: 2,
       width: "calc(20%)",
       backgroundColor: theme.palette.common.white,
       position: "absolute",
       bottom: 1,
       left: "calc(40%)",
       transition: 'all 0.35s ease-out',
    },
      blackBack: {
      backgroundColor: "#372c2e"
    },
                
}));

const OrderInfo = ({ order }) => { 

  const [summaryExpanded, setSummaryExpanded] = useState(false);

  const toggleAccordionSummary = () => {
    setSummaryExpanded(!summaryExpanded);
  }; 

  const classes = useStyles();

  return (
    <div className="order-info">
      <h1>Checkout</h1>
      <div className="order-personal-info">
        <ul className="order-info-ul">
          <li className="info-item-li">
            <div className="info-item-title">
              Status:
            </div>
            <div>
              {order.status}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Payment method:
            </div>
            <div>
              {order.paymentMethod[0].toUpperCase() + order.paymentMethod.slice(1)}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              First name: 
            </div>
            <div>
              {order.firstName}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Last name: 
            </div>
            <div>
              {order.lastName}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Address: 
            </div>
            <div>
              {order.address}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              City:
            </div>
            <div>
              {order.city}
            </div>
          </li>
          <li className="info-item-li">
            <div className="info-item-title">
              Zip code:
            </div>
            <div>
              {order.zipCode}
            </div>
          </li>
        </ul>
      </div>
      <div className="order-products-info">
        <div>
          <Accordion
            expanded={summaryExpanded}
            onChange={toggleAccordionSummary}
            className={classes.accordionSummary}
          >
            <AccordionSummary
              
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {summaryExpanded ? (
                <h4 className={classes.heading}>
                  Hide summary
                </h4>
              ) : (
                <h4 variant="body2" className={classes.heading}>
                  Summary ({order.order_products.length} products)
                </h4>
              )}
            </AccordionSummary>
            {order.order_products &&
              order.order_products.map((order) => (
                <div key={`${order.product.id}${order.id}`}>
                  {order.product ? (
                    <AccordionDetails
                      className={classes.product}
                    >
                      <div style={{ flexGrow: "1" }}>
                        <h4 className={classes.heading}>
                          {order.product.name}
                        </h4>
                      </div>
                      <div>
                        <Typography variant="body2" style={{paddingLeft: "2px", fontSize: "12px"}}>
                          {parseFloat(order.product.price).toFixed(2) > parseFloat(order.unitPrice).toFixed(2) ? (
                            <>
                              <del style={{display: "inline-block"}}> ${parseFloat(order.product.price).toFixed(2)} </del>{" "}
                              <strong style={{display: "inline-block"}}> ${parseFloat(order.unitPrice).toFixed(2)} </strong>
                            </>
                          ) : (
                            <span style={{display: "inline-block"}}>${(parseFloat(order.unitPrice)).toFixed(2)}</span>
                          )}
                          {" "}<span style={{display: "inline-block"}}>x {order.units}</span>
                        </Typography>
                      </div>
                    </AccordionDetails>
                  ) : (
                    <AccordionDetails
                      key={Math.random()}
                      className={classes.product}
                    >
                      <div style={{ flexGrow: "1" }}>
                        <Typography variant="body2">
                          Product not found
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2">
                        <>${order.unitPrice / order.units} </>
                        x {order.units}
                        </Typography>
                      </div>
                    </AccordionDetails>
                  )}
                </div>
              ))
            }
          </Accordion>
        </div>
        <div className="info-total">
          <div className="info-item-title">Total:
          $ {order.total}
          </div>
         </div>
      </div>   
    </div>
  )
}

export default OrderInfo
