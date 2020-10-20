import React, { Fragment, useEffect, useState } from 'react';
import { Avatar, Container, Fab, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { fetchContact, fetchDeleteUser, fetchModalForm } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Add, Edit } from '@material-ui/icons';
import FormUser from '../../layout/FormUser';
import DataAlert from '../../components/DataAlert/DataAlert';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  contactContainer:{
    marginTop:theme.spacing(5),
  }
}));

const Home = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  let userInit = {
    'firstName': '',
    'lastName': '',
    'age': 0,
    'photo': ''
  };

  const [modalType, setModalType] = useState('');
  const [userData, setUserData] = useState(userInit);



  useEffect(() => {
    dispatch(fetchContact());
    // eslint-disable-next-line
  }, []);


  const handleAddUser = () =>{
    setUserData(userInit);
    setModalType('add');
    dispatch(fetchModalForm(true));
  };

  const handleEdit = (user) =>{
    setUserData(user);
    setModalType('edit');
    dispatch(fetchModalForm(true));
  };

  const handleDelete = (id) =>{
    const payload = {
      'method': 'delete',
      'id': id,
    };
    dispatch(fetchDeleteUser(payload));
  };

  const handleCloseModal = () =>{
    dispatch(fetchModalForm(false));
  };




  const contactState = useSelector(s => s.home);

  let dataUser;
  if(!contactState.isLoading){
    dataUser = contactState.data.map(user =>{
      return(
        <Fragment key={user.id}>
          <Grid item sm={2} xs={12}>
            <Avatar alt="Remy Sharp" src={user.photo} />
          </Grid>
          <Grid item sm={7} xs={6}>
            <Typography>Name : {user.firstName} {user.lastName}</Typography>
            <Typography>Age : {user.age}</Typography>
          </Grid>
          <Grid item sm={3} xs={6}>
            <IconButton onClick={()=>handleDelete(user.id)}>
              <Delete />
            </IconButton>
            <IconButton onClick={()=>handleEdit(user)}>
              <Edit />
            </IconButton>
          </Grid>
        </Fragment>
      );
    });
  }
  else{
    dataUser = <Typography>Memuat...</Typography>;
  }


  return (
    <div>
      {contactState.isError ? <DataAlert inputProps={{ severity:'error' }} message={contactState.isError}/> : null}

      <Container className={classes.contactContainer} maxWidth="sm">
        <Grid alignItems="center"
          container
          direction="row"
          justify="center"
          spacing={2}
        >
          {dataUser}
        </Grid>

        {
          !contactState.isLoading ? <Fab aria-label="add" className={classes.fab} color="primary" onClick={handleAddUser} size="medium">
            <Add />
          </Fab> : null
        }

      </Container>


      {
        modalType ? <FormUser
          handleCloseModal={handleCloseModal}
          modalType={modalType}
          openModal={contactState.openModal}
          userData={userData}/> : null}

    </div>
  );
};

export default Home;
