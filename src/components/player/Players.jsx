import React, { use, useState } from 'react';
import AvailablePlayers from '../availablePlayer/AvailablePlayers';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers';

const Players = ({ playerData }) => {
      const playersData = use(playerData);
      const [selectedType, setSelectedType] = useState('available');
      console.log('selected', selectedType);
      return (
            <div className='mx-8 my-[60px]'>

                  <div className='flex justify-between'>
                        {selectedType === "available" ? <h1 className='font-bold text-xl'>Available Players</h1> : <h1 className='font-bold text-xl'>Selected Players (2/6)</h1>}
                        <div className=''>
                              <button onClick={() => setSelectedType('available')}
                              className={`${selectedType === "available" ? "bg-amber-400" : ""} btn rounded-l-xl rounded-r-none p-6 font-bold`}>Available</button>
                              <button onClick={() => setSelectedType('selected')}
                              className={`${selectedType === "selected" ? "bg-amber-400" : ""} btn rounded-r-xl rounded-l-none p-6 font-bold`}>Selected(0)</button>
                        </div>
                  </div>
                  {selectedType === "available" ? <AvailablePlayers playersData={playersData}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
            </div>
      );
};

export default Players;