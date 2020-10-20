import React from 'react';
import ModalDialog from '../../components/ModalDialog';
import PropTypes from 'prop-types';
import { Button, DialogActions, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchAddUser, fetchEditUser } from '../../pages/Home/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));


const FormUser = ({ openModal, handleCloseModal,userData, modalType }) => {
  const dispatch = useDispatch();
  const classes = useStyles();



  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'FirstName Required';
    } else if (values.firstName.length < 3) {
      errors.firstName = 'Minimal 3 karakter';
    }
    if (!values.lastName) {
      errors.lastName = 'LastName Required';
    } else if (values.lastName.length < 3) {
      errors.lastName = 'Minimal 3 karakter';
    }
    if (!values.age) {
      errors.age = 'Age Required';
    } else if (values.age === 0) {
      errors.lastName = 'Tidak boleh 0';
    }
    else if (values.age > 100) {
      errors.lastName = 'Maximum Age 100';
    }
    if (!values.photo) {
      errors.photo = 'Photo Required';
    }
    return errors;
  };

  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    age: userData.age,
    photo: userData.photo,
    type:modalType
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit : value => {
      let payload;
      if(value.type === 'add'){
        payload={
          'method': 'post',
          'body': {
            'firstName': value.firstName,
            'lastName': value.lastName,
            'age': value.age,
            'photo': value.photo,
          }
        };
        dispatch(fetchAddUser(payload));
      }
      else{
        payload={
          'method': 'put',
          'id':userData.id,
          'body': {
            'firstName': value.firstName,
            'lastName': value.lastName,
            'age': value.age,
            'photo': value.photo,
          }
        };
        dispatch(fetchEditUser(payload));
      }

    }
  });

  let formTitle = modalType === 'add' ? 'Add' : 'Edit';

  return (
    <div>
      <ModalDialog inputProps={{ open:openModal, onClose:handleCloseModal }}>
        <DialogContent>
          <Typography>{formTitle} User</Typography>
          <form className={classes.root} onSubmit={formik.handleSubmit}>
            <div>
              <TextField
                defaultValue={userData.firstName}
                error = {formik.touched.firstName && formik.errors.firstName ? true : false}
                helperText={formik.errors.firstName}
                label="Firstname"
                name="firstName"
                onChange={formik.handleChange}
                size="small"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                defaultValue={userData.lastName}
                error = {formik.touched.lastName && formik.errors.lastName ? true : false}
                helperText={formik.errors.lastName}
                label="Lastname"
                name="lastName"
                onChange={formik.handleChange}
                size="small"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                defaultValue={userData.age}
                error = {formik.touched.age && formik.errors.age ? true : false}
                helperText={formik.errors.age}
                label="Umur"
                name="age"
                onChange={formik.handleChange}
                size="small"
                type="number"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                defaultValue={userData.photo}
                error = {formik.touched.photo && formik.errors.photo ? true : false}
                helperText={formik.errors.photo}
                label="Photo"
                name="photo"
                onChange={formik.handleChange}
                size="small"
                variant="outlined"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button color="primary" onClick={formik.handleSubmit}>
            {formTitle}
          </Button>
        </DialogActions>
      </ModalDialog>
    </div>
  );
};

FormUser.defaultProps = {
  handleCloseModal: ()=>{},
  modalType:'',
  openModal: false,
  userData:{},


};

FormUser.propTypes = {
  handleCloseModal: PropTypes.func,
  modalType:PropTypes.string,
  openModal: PropTypes.bool,
  userData:PropTypes.object,
};


export default FormUser;
