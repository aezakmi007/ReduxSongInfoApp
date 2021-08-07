import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "N Scrubs", duration: "4:05" },
    { title: "MAcarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I want it That way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
