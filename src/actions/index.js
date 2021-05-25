//Action creator

export const selectSong = (song) => {
  //return some action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
