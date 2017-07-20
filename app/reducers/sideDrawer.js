
const initialState = {
  open: true
}

const sideDrawer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEDRAWER': 
      return {
        open: !state.open
      }
    default: 
      return Object.assign({}, state)
  }
}

export default sideDrawer