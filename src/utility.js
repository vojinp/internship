export function sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

export const initialState = (localStorage["redux-store"] && 
    sameDay(new Date(JSON.parse(localStorage["redux-store"]).date), new Date())) ?
    JSON.parse(localStorage["redux-store"]) :
    {}

export const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())
