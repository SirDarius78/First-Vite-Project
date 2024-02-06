import { useContext } from 'react'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const activeStyle = 'underline underline-offset-4'

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/60'>
            {parsedAccount?.email}
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => handleSignOut()}>
            Sign in
          </NavLink>
        </li>
      )
    }
  }
/*  return (
    <nav className='flex flex-col md:flex-row justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <div className='flex items-center gap-3'>
        <div className='font-semibold text-lg'>
          <Link to={`${isUserSignOut ? '/sign-in' : '/'}`}>Shopi</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div className={`md:flex flex-col ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink
          to='/'
          onClick={() => context.setSearchByCategory()}
          className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          All*/
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
            Shopi
          </NavLink>
          <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className={`md:flex flex-col${isOpen ? 'flex' : 'hidden'}`}></div>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            onClick={() => context.setSearchByCategory('furniture')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center mt-4 md:mt-0'>
        {renderView()}
        <li className='flex items-center'>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  )
}

/* </div>
        <div className='flex items-center mt-4 md:mt-0'>
          {renderView()}
          <div className='flex items-center'>
            <ShoppingCart />
          </div>
        </div>
      </nav>
    );
  };*/

export default Navbar


/*// Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeStyle = 'underline underline-offset-4';

  const renderView = () => {
    // ... (tu lógica actual)
  };

  return (
    <nav className='flex flex-col md:flex-row justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <div className='flex items-center gap-3'>
        <div className='font-semibold text-lg'>
          <Link to={`${isUserSignOut ? '/sign-in' : '/'}`}>Shopi</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div className={`md:flex flex-col ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink
          to='/'
          onClick={() => context.setSearchByCategory()}
          className={({ isActive }) => (isActive ? activeStyle : undefined)}>
          All
        </NavLink>
       
        </div>
        <div className='flex items-center mt-4 md:mt-0'>
          {renderView()}
          <div className='flex items-center'>
            <ShoppingCart />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
*/  