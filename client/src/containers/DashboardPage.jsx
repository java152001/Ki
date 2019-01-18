import React, { Component } from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import DialogExampleSimple from '../components/DialogExampleSimple.jsx';
import API from "../utils/API"
import Button from 'material-ui/FlatButton';
import axios from "axios";

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

      console.log(response);
      console.log(this.state);
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <Dashboard secretData={this.state.secretData} user={this.state.user} handleBtnClick={this.handleBtnClick} />
        {this.state.showArticles ?
          this.state.articles.map((article, i) =>
          <div>
            <DialogExampleSimple article={article} data-id={article}/>
            </div>
          ) : false}
      </div>
    );
  }
}

export default DashboardPage;
