import React, { use } from 'react';
import AvailablePlayers from '../availablePlayer/AvailablePlayers';

const Players = ({ playerData }) => {
      // console.log(playerData);
      const playersData = use(playerData);
      // console.log(playersData)
      return (
            <div>
                  <AvailablePlayers playersData={playersData}></AvailablePlayers> 
            </div>
      );
};

export default Players;