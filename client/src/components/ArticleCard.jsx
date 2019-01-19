import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, CardActions } from "material-ui/Card";
import Button from "material-ui/FlatButton";
import API from "../utils/API";
import Grid from "@material-ui/core/Grid";

const ArticleCard = ({ key, article, titleId }) => (
  <Card className="articleCard card border-primary mb-3">
    <h3 className="card-header border-primary">Article number {titleId}</h3>
    <CardTitle
      className="card-text"
      title={article.title}
      key={key}
      data-id={article._id}
    />
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={function() {
          window.open(article.link, "_blank");
        }}
      >
        Go To Article
      </Button>
    </CardActions>
  </Card>
);

export default ArticleCard;
