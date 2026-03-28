import React from 'react';
import coinImg from '../../assets/dollar_1.png'
import navMainIcon from '../../assets/logo.png'
const Navbar = ({ coin }) => {
      return (
            <nav className='mx-8'>
                  <div className="navbar bg-base-100 shadow-sm justify-between">
                        <div className="flex-1">
                              <img src={navMainIcon} alt="" />
                        </div>
                        <div className='navbar-center gap-4 font-semibold items-center'>
                              <a href="/">Home</a>
                              <a href="/fixture">Fixture</a>
                              <a href="/team">Team</a>
                              <a href="/schedule">Schedule</a>
                        </div>
                        <div className="flex-none border-0 rounded-xl p-4 navbar-end">
                              <div className='flex justify-between items-center gap-2'>
                                    <p className='font-semibold text-xl'>{coin} Coins</p>
                                    <img src={coinImg} alt="" />
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;