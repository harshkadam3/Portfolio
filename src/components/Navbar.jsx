import { NavLink } from "react-router-dom";

import hk from "../assets/images/hk.png";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={hk} alt='logo' className='w-9 h-8 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
