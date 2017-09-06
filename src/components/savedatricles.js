import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

///Individual saved Articles

class SavedArticles extends React.Component{
  render(){
    return(
      <Panel>
        <a href={this.props.link}>{this.props.title}</a>
      </Panel>
    )
  }
}

export default SavedArticles
