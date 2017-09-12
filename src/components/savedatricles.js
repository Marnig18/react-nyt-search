import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem, Image} from 'react-bootstrap'
import style from '../css/saved.css'

///Individual saved Articles

class SavedArticles extends React.Component{
  render(){
    return(

      <Row>
          <Col xs={2}>
            <Image responsive src={this.props.image}/>
          </Col>
          <Col xs={8} className="linkDiv">
            <a className="articleName" vertical-align href={this.props.link}>{this.props.title}</a>
          </Col>
          <Col xs={2}>
            <Button type="submit" onClick = {this.handleSave} className="notesBtn">Notes</Button>
          </Col>
        </Row>

    )
  }
}

export default SavedArticles
