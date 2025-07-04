import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const Suspendaccount = ({suspenopen,supendclose}:{suspenopen:any;supendclose:any}) => {
  return (
   <Dialog
           open={suspenopen}
           onClose={supendclose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
            PaperProps={{
             sx: {
               width: '400px',  
               height: '200px',
             },
     }}
          BackdropProps={{
                    sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  },
                }} 
           >
           <DialogContent>
           <Typography textAlign="center">Are you sure want to delete the Suspend Account?</Typography>
           </DialogContent>
           <DialogActions sx={{display:'flex', justifyContent:'center',marginBottom:'36px', gap:"100px"}}>
             <Button variant="outlined" onClick={supendclose} sx={{border:'1px solid red',color:'red'}}>Cancel</Button>
             <Button variant="contained" onClick={supendclose} autoFocus sx={{background:'red','&:hover':{
              background:'red' }}}>
               Delete
             </Button>
           </DialogActions>
         </Dialog>
  )
}

export default Suspendaccount
