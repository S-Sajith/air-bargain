import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const InfoDialog = (props: any) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <Typography>This is the Info dialog content.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
