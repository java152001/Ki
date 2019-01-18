import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ArticleCard from '../components/ArticleCard.jsx';
import TextField from 'material-ui/TextField'


class CommentDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      comment: ''
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCommentChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const actions = [
      <div style={{ textAlign: "left", margin: "2%"}}>  
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Enter Comment Here"
        multiline
        margin="normal"
      /></div>,
      <div style={{ textAlign: "left" }}>
        <FlatButton
          label="Post"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleAddComment}
        />
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        /></div>
    ];

    return (
      <div>
        <div onClick={this.handleOpen}>
          <ArticleCard article={this.props.article} label="Dialog" />
        </div>
        <Dialog
          title={'Comments - ' + this.props.article.title}
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
export default CommentDialog;
