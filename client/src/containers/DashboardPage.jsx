import React, { Component } from "react";
import Auth from "../modules/Auth";
import Dashboard from "../components/Dashboard.jsx";
import DialogExampleSimple from "../components/DialogExampleSimple.jsx";
import API from "../utils/API";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

axios.defaults.headers.common["Authorization"] = `Bearer ${Auth.getToken()}`;

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: "",
      user: {},
      articles: [],
      showArticles: false
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    API.scrape().then(res => {
      this.setState({
        secretData: res.data.message,
        user: res.data.user
      });
    });
  }

  handleBtnClick() {
    API.getArticles().then(response => {
      this.setState({
        articles: response.data,
        showArticles: true
      });
    });
  }
  render() {
    return (
      <div>
        <Dashboard
          secretData={this.state.secretData}
          user={this.state.user}
          handleBtnClick={this.handleBtnClick}
        />
        {this.state.showArticles
          ? this.state.articles.map((article, i) => (
              <div>
                <Grid container spacing={24}>
                  <Grid item xs>
                    <DialogExampleSimple
                      key={i}
                      titleId={i}
                      article={article}
                      data-id={article}
                    />
                  </Grid>
                </Grid>
              </div>
            ))
          : false}
      </div>
    );
  }
}

export default DashboardPage;
