import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import Button from 'material-ui/FlatButton';
import API from "../utils/API";

const ArticleCard = ({ article }) => (
    <Card className="articleCard">
        <CardTitle title={article.title} data-id={article._id}/>
        <CardActions>
            <Button size="small" color="primary" onClick={(
                function() {
                    window.open(article.link, '_blank');
                }
            )}>Open Article</Button>
            <Button size="small" color="secondary" onClick={(
                function() {
                    API.deleteArticle(article._id)
                }
            )}>Delete Article</Button>
        </CardActions>
    </Card>
)


export default ArticleCard;
