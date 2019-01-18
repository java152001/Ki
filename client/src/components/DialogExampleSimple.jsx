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
      comment: "",
      article: {},
      user: {}
    };
  }

componentDidMount() {
  this.setState({
    article: this.props.article,
    user: this.props.user
  })
}


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  inputChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  postComment = (event) => {
    event.preventDefault();

    const commentObj = {
      title: this.state.comment,
      article: this.state.article,
      user: this.state.user
    }

    API.saveComment(commentObj)
  }

  render() {
    const actions = [
      <TextField 
        style={{margin: 'auto'}}
        name="comment"
        value={this.state.value}
        onChange={this.inputChange}
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
