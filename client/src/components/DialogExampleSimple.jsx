import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArticleCard from '../components/ArticleCard.jsx';
import TextField from 'material-ui/TextField'
import API from "../utils/API.js"

class DialogExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  postComment = () => {
    API.saveComment
  }

  render() {
    const actions = [
      <TextField 
        style={{margin: 'auto'}}
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        margin="normal"
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        type="submit"
        label="Submit Comment"
        primary={true}
        onClick={this.postComment}
      />
    ];

    return (
      <div>
        <div onClick={this.handleOpen}>
        <ArticleCard article={this.props.article} label="Dialog"/>
        </div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {this.props.article.comments}
        </Dialog>
      </div>
    );
  }
}
export default DialogExampleSimple;
