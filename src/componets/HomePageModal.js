import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Stack, FormControlLabel, Checkbox, Icon } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DiamondsImage2 from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/DiamondsImage2.png'
import Login from './Login';
import { Link } from 'react-router-dom';

const HomePageModal = () => {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    }

    const closeModalHandler = () => {
        setOpenModal(false);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={openModalHandler} color='primary' variant='contained'>Open Popup</Button>
            <Dialog open={openModal} onClose={closeModalHandler} fullWidth maxWidth="lg">
                <DialogTitle style={{ textAlign: 'center' }}>Sign Up <Icon onClick={closeModalHandler} style={{ float: 'right' }}><CloseIcon /></Icon></DialogTitle>
                <DialogContent>
                    <DialogContentText>Get 10% off & A birthday treat</DialogContentText>
                    <DialogContentText>When you sign up for our email & text list</DialogContentText>
                    <img src={DiamondsImage2} style={{ float: 'left', marginRight: "15px", width: 400, height: 200 }} alt="diamonds"></img>
                    <Stack spacing={2} margin={2}>
                        <TextField id="outlined-required" variant='outlined' label="Username" size="small"></TextField>
                        <TextField id="outlined-required" variant='outlined' label="Password" size="small"></TextField>
                        <TextField id="outlined-required" variant='outlined' label="Email" size="small"></TextField>
                        <TextField id="outlined-required" variant='outlined' label="Birthday" size="small"></TextField>
                        <TextField id="outlined-required" variant='outlined' label="Phone" size="small"></TextField>
                        <FormControlLabel control={<Checkbox defaultChecked color='primary' size="small" />} label='Agree terms & conditions'></FormControlLabel>
                        <Button color='primary' variant='contained'> Subscribe Now!</Button>
                        <Link to="/login">
                            <Button color='primary' variant='contained'>Login</Button>
                        </Link>
                    </Stack>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HomePageModal;
