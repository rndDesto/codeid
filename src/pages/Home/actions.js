import { contactApi } from '../../util/fetch';
import { DATA_FETCHED, LOADING, MODAL, ISERROR } from './constants';


export const fetchModalForm = (open) => {
  return dispatch => {
    dispatch(modalAction(open));
  };
};

export const fetchContact = () => {
  return async dispatch => {
    let response;
    let payload={
      'method': 'get',
    };
    dispatch(loadingAction(true));
    try {
      response = await contactApi(payload);
      dispatch(dataFetchedAction(response.data));
    } catch (err) {
      dispatch(loadingAction(false));
      dispatch(errorAction(err.message));
    }
  };
};


export const fetchAddUser = (payload) => {
  return async dispatch => {
    let response;
    try {
      response = await contactApi(payload);
      if(response){
        dispatch(fetchContact());
        dispatch(fetchModalForm(false));
      }
    } catch (err) {
      dispatch(errorAction(err.message));
    }
  };
};


export const fetchEditUser = (payload) => {
  return async dispatch => {
    let response;
    try {
      response = await contactApi(payload);
      if(response){
        dispatch(fetchContact());
        dispatch(fetchModalForm(false));
      }
    } catch (err) {
      dispatch(errorAction(err.message));
    }
  };
};


export const fetchDeleteUser = (payload) => {
  return async dispatch => {
    let response;
    try {
      response = await contactApi(payload);
      if(response){
        dispatch(fetchContact());
      }
    } catch (err) {
      dispatch(errorAction(err.message));
    }
  };
};

const dataFetchedAction = (data) => {
  return { type: DATA_FETCHED, payload:data };
};

const loadingAction = (isLoading) => {
  return { type: LOADING, payload:isLoading };
};

const modalAction = (open) => {
  return { type: MODAL, payload:open };
};

export const errorAction = (err) => {
  return { type: ISERROR, payload:err };
};
