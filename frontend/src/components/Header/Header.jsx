import React from 'react'
import { Link } from "react-router-dom"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import './Header.css'
import { Link as ScrollLink } from "react-scroll";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Order your Favourite Food Here</h2>
          <p>
            Choose from a diverse menu featuring a deectable array of dishes
            crafted with the finest ingredients
          </p>

          <button>
            <ScrollLink
              to="exploreMenu"
              smooth={true}
              duration={500}
              
            >
              View Menu
            </ScrollLink>
          
          </button>
        </div>
      </div>
    </>
  );
}

export default Header