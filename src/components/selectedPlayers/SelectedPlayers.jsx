import { Annoyed, Trash2 } from 'lucide-react';
import React from 'react';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers , coin , setCoin}) => {
      // console.log('set selected Player', setSelectedPlayers)
      const handleDeletedSelectedPlayer = (player) => {
            const filteredPlayer = selectedPlayers.filter(
                  (selectedPlayer) => selectedPlayer.playerName != player.playerName,
                  // console.log(selectedPlayers, 'selectedPlayers')
            );
            setSelectedPlayers(filteredPlayer);
            setCoin (coin +  player.price);
      }
      return (
            <div>
                  {selectedPlayers.length===0 ?
                  <div className='text-2xl font-bold flex flex-col items-center'>
                        <h2>No Players are selected</h2>
                        <p>Go to the available section to select player</p>
                  </div>
                  :selectedPlayers.map((player) => (
                        <div className='flex justify-between items-center border rounded-2xl mb-4 p-10' key={player.id}>
                              <div className='flex gap-5 items-center'>

                                    <img className='w-[150px] rounded-4xl' src={player.playerImg} alt="" />
                                    <div className='text-xl font-bold'>
                                          <h2 className='flex gap-2'> <Annoyed></Annoyed> {player.playerName}</h2>
                                          <p>{player.role}</p>
                                    </div>
                              </div>
                              <button onClick={() => handleDeletedSelectedPlayer(player)} className='hover:cursor-pointer text-red-500'> <Trash2></Trash2> </button>
                        </div>
                  ))}
            </div>
      );
};

export default SelectedPlayers;