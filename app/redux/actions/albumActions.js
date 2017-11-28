/**
* Album actions
*/
//Load Albums
export const loadAlbums = (albums) => {
  return {
    type:"ALBUM_LOAD_ALBUMS",
    payload:albums
  }
}
