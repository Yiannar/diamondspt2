import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from ".//Reviews";
import './DiamondDetails.css';
import ContactUsButton from "./ContactUsButton";
import { ShopContext } from "../context/diamond-context";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const API = process.env.REACT_APP_API_URL;

function DiamondDetails() {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [diamond, setDiamond] = useState({});
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  const deleteDiamond = () => {
    axios
      .delete(`${API}/diamonds/${id}`)
      .then(() => {
        navigate(`/diamonds`);
      })
      .catch((c) => console.warn('catch', c));
  };

  useEffect(() => {
    axios
      .get(`${API}/diamonds/${id}`)
      .then((response) => {
        setDiamond(response.data);
      })
      .catch((c) => {
        console.warn('catch', c);
      });
  }, [id]);

  function getPriceInDecimal(diamond) {
    return (diamond[0].price / 100).toFixed(2);
  }

  return (
    <>
      <article>
        {diamond[0] && (
          <div className="diamond-details-container">
            <h1 className="diamond-shape">{diamond[0].shape}</h1>
            <h2 className="diamond-price">Price: {diamond[0].price}</h2>
            
            <img className="diamond-image" src={diamond[0].image} alt='diamondpic'/>
            <Button onClick={() => addToCart(id)} className="add-to-cart-button">Add to Cart </Button>
            <ContactUsButton className='contact-us-button' />
            <Button className="toggle-description-button"
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}>
              Diamond Details
            </Button>
            {isDescriptionVisible && (
              <TableContainer component={Paper} className="details-table">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell><h4>Carat:</h4></TableCell>
                      <TableCell><h4>{diamond[0].carat}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Color:</h4></TableCell>
                      <TableCell><h4>{diamond[0].color}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Clarity:</h4></TableCell>
                      <TableCell><h4>{diamond[0].clarity}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Cut:</h4></TableCell>
                      <TableCell><h4>{diamond[0].cut}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Price:</h4></TableCell>
                      <TableCell><h4>${getPriceInDecimal(diamond)}</h4></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><h4>Reported:</h4></TableCell>
                      <TableCell><h4>{(diamond[0].is_reported).toString()}</h4></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* <div className="action-buttons">
                  <Link to={`/diamonds`}>
                      <button className="back-button"> Back</button>
                  </Link>
                  <Link to={`/diamonds/${id}/edit`}>
                      <button className="edit-button">Edit</button>
                  </Link>
                  <button className="delete-button" onClick={deleteDiamond}>Delete</button>
              </div> */}
          </div>
        )}
      </article>
      <Reviews className="reviews-section" />
    </>
  );
}

export default DiamondDetails;
