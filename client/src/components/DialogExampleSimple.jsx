import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArticleCard from '../components/ArticleCard.jsx';
import TextField from 'material-ui/TextField'
import API from "../utils/API.js"
import Grid from "@material-ui/core/Grid";

class DialogExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      comment: "",
      article: {},
      user: {},
      comments: []
    };

    this.handleOpen.bind(this);
  }

componentDidMount() {
  this.setState({
    article: this.props.article,
    user: this.props.user
  });
};


  handleOpen = () => {
    this.setState({ open: true });

    API.getComments(this.state.article._id)
    .then((response) => {
      if (response) {
        console.log(response.data);
        this.setState({comments: response.data})
      }
      else {
        console.log("No Comments");
      }
    });
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
      <div style={{width: "100%", padding: 5, height: "20%", textAlign: "center"}}>
      <TextField 
        style={{margin: 'auto'}}
        name="comment"
        value={this.state.value}
        onChange={this.inputChange}
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Add a Comment"
        multiline={true}
        fullWidth="true"
        margin="normal"
      />
      </div>,
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

    let commentLength = this.state.comments.length;

    {
      this.state.comments.map((comment, i) =>
        actions.unshift(
          <div style={{float: "left", width: "100%", padding: 5}}>
            <div style={{float: "left", width: "15%", marginRight: 5, height:"100%", textAlign: "center", borderStyle: "solid", borderRadius: 3}}>
              <h1>{commentLength - i}</h1>
            </div>
            <div style={{float: "left", width: "80%", textAlign: "center", height: "100%"}}>
              <TextField
                id={i}
                value={comment.title}
                variant="outlined"
                disable={true}
                fullWidth="true"
                underlineShow={false}
                multiline={true}
                rows={2}
                />
            </div>
          </div>
        )
      )
      console.log(actions)
    }



    return (
      <div>
        <div onClick={this.handleOpen}>
        <ArticleCard article={this.props.article} key={this.props.titleId} titleId={this.props.titleId + 1} label="Dialog"/>
        </div>
        <Dialog
          title={this.props.article.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        {this.state.comments.title}
        </Dialog>
      </div>
    );
  }
}
export default DialogExampleSimple;
