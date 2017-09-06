import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Grid, PageHeader, Row, Col, Panel, FormGroup, FormControl, ControlLabel, Button, ListGroup, Form, ListGroupItem} from 'react-bootstrap'
import axios from 'axios'
import ResultsList from './resultslist'
import style from "./css/searchcss.css"


class Search extends React.Component{
  constructor(){
    super();

      this.state={
        topic:"",
        startDate: "",
        endDate: ""
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) =>{
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("handleSubmit called")
    this.props.makeRequest(
      this.state.topic,
      this.state.startDate,
      this.state.endDate)
    this.setState({
      topic: "",
      startDate: "",
      endDate: ""
      })
    }









  render(){
    const title = (
      <h3>Article Search</h3>
    );

    const header=(
      <h3>Results</h3>
    )

    const articles = this.props.articles



    return(
      <Grid>
        <Row>
          <Col xs={6}>
         <Panel header={title}>
           <form>
             <FormGroup controlId="topic">
               <ControlLabel>Topic</ControlLabel>
               <FormControl
                 type="text"
                 value={this.state.topic}
                 placeholder="Enter Topic"
                 onChange={this.handleChange}
               />
             </FormGroup>
             <Row>
               <Col xs={6}>
             <FormGroup controlId="startDate" inline>
               <ControlLabel>Start Date</ControlLabel>
               <FormControl
                 type="date"
                 value={this.state.startDate}
                 onChange={this.handleChange}
               />
             </FormGroup>
           </Col>
           <Col xs={6}>
             <FormGroup controlId="endDate" inline>
               <ControlLabel>End Date</ControlLabel>
               <FormControl
                 type="date"
                 value={this.state.endDate}
                 onChange={this.handleChange}
               />
             </FormGroup>
           </Col>
         </Row>

            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
               <Button type="submit" block onClick={this.handleSubmit}>
                 Search
               </Button>
             </Col>
             <Col xs={4}></Col>
           </Row>
           </form>
         </Panel>
       </Col>

          <Col xs={6}>
          {articles.length > 0 ?(
         <Panel header={header}>
           <ResultsList saveArticle={this.props.saveArticle} articles={this.props.articles} />
         </Panel>
       ) : (
         <Panel>
           No Results Found
         </Panel>
       )
       }
     </Col>
   </Row>
</Grid>
    )
  }
}

export default Search
