import React, { useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Stack, FormControlLabel, Checkbox, Icon} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DiamondsImage2 from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/DiamondsImage2.png'

const HomePageModal = () => {

    const [openModal, openChange]= useState(false)

    const functionOpenPopUp =()=>{
        openChange(true)
    }
    const closePopUp =()=>{
        openChange(false)
    }
    return (
        <div style={{textAlign:'center'}}>
            <Button onClick={functionOpenPopUp} color='primary' variant='contained'>Open Popup</Button>
            <Dialog  open={openModal} onClose={closePopUp} fullWidth maxWidth= "lg" >
                <DialogTitle style={{textAlign: 'center'}}>Sign Up <Icon onClick={closePopUp} style={{float:'right'}}><CloseIcon></CloseIcon></Icon></DialogTitle>
                <DialogContent>
                    <DialogContentText>Get 10% off & A birthday treat</DialogContentText>
                    <DialogContentText>When you signup for our email & text list</DialogContentText>
                    <img src={DiamondsImage2} style={{float:'left', marginRight: "15px", width: 400, height: 200}} ></img>
                    <Stack spacing={2} margin={2}>
                        <TextField  id="outlined-required" variant='outlined' label="Username" size="small"></TextField>
                        <TextField  id="outlined-required" variant='outlined' label="Password" size="small"></TextField>
                        <TextField  id="outlined-required" variant='outlined' label="Email" size="small"></TextField>
                        <TextField  id="outlined-required" variant='outlined' label="Birthday" size="small"></TextField>
                        <TextField  id="outlined-required" variant='outlined' label="Phone" size="small"></TextField>
                        <FormControlLabel control={<Checkbox defaultChecked color='primary' size="small"></Checkbox>} label='Agree terms & conditions'></FormControlLabel>
                        <Button color='primary' variant='contained'> Subscribe Now!</Button>
                    </Stack>
                </DialogContent>
                {/* <DialogActions> */}
                    {/* <Button onClick={closePopUp}color='error' variant='contained'>Close</Button> */}
                {/* </DialogActions> */}
            </Dialog>
        </div>
    );
};

export default HomePageModal;