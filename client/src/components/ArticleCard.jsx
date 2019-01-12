
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
import API from "../utils/API";





const ArticleCard = ({ key, article }) => (
    <Card className="articleCard">
        <CardTitle title={article.title} key={key} data-id={article._id}/>
    </Card>
)


export default ArticleCard;
