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
    const { classes } = this.props;
    const actions = [
      <TextField
      id="standard-textarea"
      label="With placeholder multiline"
      placeholder="Placeholder"
      multiline
      className={classes.textField}
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
export default CommentDialog;
