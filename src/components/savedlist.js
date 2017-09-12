import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import SavedArticles from "./savedatricles"
import style from "../css/saved.css"

class SavedList extends React.Component{
  render(){
    return(
      <ListGroup bsClass="savedList">
        {this.props.articles.map(item =>
        <ListGroupItem key={item._id} bsClass="savedArticleItems">
          <SavedArticles saveArticle={this.props.saveArticle}
          title = {item.title} link = {item.link} date = {item.date} image={item.image}/>
        </ListGroupItem>
       )}
      </ListGroup>
    )
  }
}
export default SavedList
