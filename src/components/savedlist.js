import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import SavedArticles from "./savedatricles"

class SavedList extends React.Component{
  render(){
    return(
      <ListGroup>
        {this.props.articles.map(item =>
        <ListGroupItem key={item._id} >
          <SavedArticles saveArticle={this.props.saveArticle}
          title = {item.title} link = {item.link} date = {item.date}/>
        </ListGroupItem>
       )}
      </ListGroup>
    )
  }
}
export default SavedList
