
const sideDrawer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEDRAWER': 
      return {
        sideDrawerOpen: !state.sideDrawerOpen
      }
    default: 
      return state
  }
}

export default sideDrawer