import React, { Component } from 'react'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class TodoDeleteItem extends Component{

  constructor(props){
    super(props);

    this.state = {
      openDialog:false
    };
  }

  removeItemDialog(event){
    event.preventDefault();
    this.setState({openDialog:true});
  }

  removeItem = () => {
    this.props.removeItem(this.props.todoItem.id);
    this.setState({openDialog:false});
  }

  handleClickOpen = () => {
    this.setState({openDialog:true});
  };

  handleClose = () => {
    this.setState({openDialog:false});
  };

  render(){

    return(
      <div>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={((event) => this.removeItemDialog(event))}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove the item:  <strong>{this.props.todoItem.text}</strong>?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.removeItem} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
