import React, { useState } from 'react';
import { CircleUser, Flag } from 'lucide-react';



const Card = ({ player }) => {
      const [isSelected, setIsSelected] = useState(false);
      const { playerName, country, role, rating, price, playerImg, battingStyle, bowlingStyle } = player;
      return (
            <div className="card bg-base-100 w-full shadow-sm">
                  <figure className="px-10 pt-10">
                        <img
                              src={playerImg}
                              alt="Shoes"
                              className="rounded-xl" />
                  </figure>
                  <div className="card-body">

                        <h2 className="card-title"> <CircleUser></CircleUser>{playerName}</h2>
                        <div className='flex justify-between items-center'>
                              <div className='flex'>
                                    <Flag></Flag>
                                    <p>{country}</p>
                              </div>
                              <button className="btn">{role}</button>
                        </div>

                        <div className="divider"></div>

                        <p>({rating})</p>
                        <div className='flex justify-between'>
                              <p>{battingStyle}</p>
                              <p className='text-right'>{bowlingStyle}</p>
                        </div>
                        <div className="card-actions flex justify-between items-center">
                              <p>Price: $<span>{price}</span></p>
                              <button onClick={() => setIsSelected(true)} disabled={isSelected ? true : false} 
                              className="btn">{isSelected? "Selected" : "Choose Player"}</button>
                        </div>
                  </div>
            </div>
      );
};

export default Card;