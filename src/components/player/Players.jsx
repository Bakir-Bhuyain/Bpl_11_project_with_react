import React, { use } from 'react';

const Players = ({ playerData }) => {
      // console.log(playerData);
      const data = use(playerData);
      console.log(data)
      return (
            <div>
                <h1>Players</h1>  
            </div>
      );
};

export default Players;