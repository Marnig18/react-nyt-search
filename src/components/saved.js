import React from 'react';
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import SavedList from "./savedlist"
import helper from "../utils/helper"

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
      <Grid>
        <Panel>
          <SavedList articles={this.state.articles}/>
        </Panel>
      </Grid>
    )
  }
}

export default Saved
