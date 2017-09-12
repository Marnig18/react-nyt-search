import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import SavedList from "./savedlist"
import helper from "../utils/helper"
import style from "../css/saved.css"
import resultStyle from "../css/searchcss.css"

// Saved Articles Container

class Saved extends React.Component{

  constructor(){
    super();

    this.state={
      articles: []
    }
  }

  componentDidMount(){
    helper.getArticles()
      .then(function(response){
        this.setState({
          articles: response.data
        })
        console.log(response)
      }.bind(this))
  }

  render(){
    return(
      <Grid className = "articlesDiv" fluid>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Panel className='resultsPanel'>
            <SavedList articles={this.state.articles}/>
          </Panel>
      </Col>
      <Col xs={1}></Col>
      </Grid>
    )
  }
}

export default Saved
