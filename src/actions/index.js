//Action creator
export const selectSong = (song) => {
  //Return an action
  return  {
    type :'SSONG_SELECTED',
    payload : song
  };
};
