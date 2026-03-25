import React from 'react';
import banner from '../../assets/banner_main.png'
import grediante from '../../assets/bg_shadow.png'
const Banner = () => {
      return (
            <div className='mx-8 mt-4'>
                  <div
                        className="hero min-h-150 bg-cover bg-center rounded"
                        style={{
                              backgroundImage: `url(${grediante})`,
                              backgroundColor: "black"
                        }}
                  >
                        <div className="hero-overlay">
                        </div>
                        <div className="hero-content text-neutral-content text-center">
                              <div className="max-w-md flex flex-col items-center">
                                    <img src={banner} alt="" />
                                    <span className="mb-5 sm:text-2xl md:text-4xl font-bold text-center max-w-2xl whitespace-nowrap">Assemble Your Ultimate Dream 11 Cricket Team</span>
                                    <p className="mb-5">
                                          Beyond Boundaries Beyond Limits
                                    </p>
                                    <button className="btn btn-primary">Claim Free Credit</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;