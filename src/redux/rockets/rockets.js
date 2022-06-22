import axios from 'axios';

const DISPLAY_ROCKET = 'react-redux-group-project/rockets/DISPLAY_ROCKET';
const baseUrl = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const displayRocket = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_ROCKET,
    payload: response.data,
  });
};
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
