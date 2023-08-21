import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-3">
        <div className="flex items-center flex-shrink-0 text-white p-5">
            <Link to='/' className='ml-6 font-bold text-5xl tracking-normal'>Cars Cars Cars!</Link>
        </div>
        <div className='block'>
            <button onClick={dropDown} className='flex items-center px-3.5 py-3.5 mr-6 text-3xl
             text-orange-500 hover:text-blue-500'>
                <i className='fas fa-bars'></i>
            </button>
        </div>
        { isVisible ? (
        <div className='w-full block flex-grow ml-6 mr-6 items-center'>
            <div className='text-xl font-bold lg:flex-grow'>
                <Button className='p-4 m-5 bg-orange-500 ml-10 border rounded'>
                    <div>
                        <Link to='/' onClick={ clicked } className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-white hover:text-blue-500 hover:border:white'>
                            Home
                        </Link>
                    </div>
                </Button>
                <Button className='p-4 m-5 bg-white ml-20 justify-center border rounded'>
                    <div>
                        <Link to='/about' onClick={ clicked } className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-orange-500 hover:text-blue-500 hover:border:white'>
                            About
                        </Link>
                    </div>
                </Button>
                <Button className='p-4 m-5 bg-white ml-20 justify-center border rounded'>
                    <div>
                        <Link to='/inventory' onClick={ clicked } className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-orange-500 hover:text-blue-500 hover:border:white'>
                            Inventory
                        </Link>
                    </div>
                </Button>
                <Button className='p-4 m-5 bg-white ml-20 justify-center border rounded'>
                    <div>
                        <Link to='/dashboard' onClick={ clicked } className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-orange-500 hover:text-blue-500 hover:border:white'>
                            Dashboard
                        </Link>
                    </div>
                </Button>
                { !isAuthenticated ? 
                <Button className='p-4 m-5 bg-white ml-20 justify-center border rounded'>
                    <div>
                        <Link to="/" onClick={signInOnClick} className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-orange-500 hover:text-blue-500 hover:border:white'>
                            Login
                        </Link>
                    </div>
                </Button>
                :
                <Button className='p-4 m-5 bg-white ml-20 justify-center border rounded'>
                    <div>
                        <Link to="/" onClick={signOutOnClick} className='flex mt-4 lg:inline-block 
                        lg:mt-0 text-orange-500 hover:text-blue-500 hover:border:white'>
                            Sign Out
                        </Link>
                    </div>
                </Button>
              }
          </div>
      </div>
   ) : (
       <></>
   )}
    </nav>
  );
}

export default Navbar;