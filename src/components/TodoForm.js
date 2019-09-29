import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

class TodoForm extends Component{

  addNewItem(e){
    e.preventDefault();

    if(this.inputText.value.replace(/\s/g, '') !== ""){
      this.props.addItem(this.inputText.value);
      this.inputText.value = "";
    }

    this.inputText.focus();
  }

  removeAll = (e) => {
    e.preventDefault();
    this.props.removeAll();
  }

  render(){

    const { classes } = this.props;

    return(
      <section style={{position:'relative', marginTop:20}}>
        <Container maxWidth="sm">
          <form onSubmit={((e) => this.addNewItem(e))}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-name"
                  label="Add Task"
                  margin="normal"
                  inputRef={(input) => this.inputText = input}
                />
              </Grid>
              <Grid item xs={7} container alignItems="center" justify = "flex-end">
                <Button className={classes.addBt} variant="contained" size="small" color="primary" type="submit">add</Button>
              </Grid>
              <Grid item xs={5} container alignItems="center" justify = "flex-end">
                <Button className={classes.deleteBt} variant="contained" size="small" color="secondary" onClick={this.removeAll}>clean all</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    );
  }
}

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  deleteBt: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  addBt: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default withStyles(styles)(TodoForm);
