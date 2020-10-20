import { DATA_FETCHED, MODAL, LOADING, ISERROR } from './constants';

const initialState = {
  data: {},
  isLoading: true,
  addMember: '',
  openModal: false,
  isError:''
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_FETCHED:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case MODAL:
      return {
        ...state,
        openModal: payload,
      };

    case ISERROR:
      return {
        ...state,
        isError: payload,
      };

    case LOADING:
      return {
        ...state,
        isLoading:payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
