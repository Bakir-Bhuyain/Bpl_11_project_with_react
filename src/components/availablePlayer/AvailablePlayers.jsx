import React from 'react';
import Card from '../card/Card';

const AvailablePlayers = ({ playersData, setCoin, coin }) => {
      // const {playerName, country, role, rating, price, playerImg, battingStyle, bowlingStyle} = playersData;
      return (
            <div className='mx-8 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center'>
                  {
                        playersData.players.map((player) => {
                              return <Card player={player} key={player.id} setCoin={setCoin} coin={coin}></Card>
                              
                        })
                  }
            </div>

      );
};

export default AvailablePlayers;