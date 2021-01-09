import React, { useEffect, useState} from 'react';

import { useDispatch, useSelector } from "react-redux";
import {fetchCategoryItems} from '../../store/actions';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';




function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  let categories = useSelector(state => state.cats.categories);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const loadCategories = async ()=>{
      try {
        await dispatch(fetchCategoryItems());
      } catch (err) {
        console.log(err.message);
      }
    }
    loadCategories();
  }, [dispatch]);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {categories && categories.map((item, index) => {
              const path=`/categories/${index+1}`
              return (
                <li key={index} className='nav-text'>
                  <Link to={path}>
                    <span>{(index+1)}.{item.name}</span>
                  </Link>
                </li>
              )
            })
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
