import axios from "axios";

const initialState = {
  loading: true,
  usersData: [],
  error: "",
};

const FECTCH_USERS_REQUEST = "FECTCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FALIURE";

function fetchUsersRequest() {
  return {
    type: FECTCH_USERS_REQUEST,
  };
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        usersData: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
      )
      .then((response) => {
        const usersData = response.data;
        dispatch(fetchUsersSuccess(usersData));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
