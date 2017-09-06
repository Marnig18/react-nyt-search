import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Grid, PageHeader, Row, Col, Navbar, NavItem, Nav} from 'react-bootstrap'
import axios from 'axios'
import Search from './search'
import Saved from './saved'
import {LinkContainer} from 'react-router-bootstrap'
import style from "./css/style.css"

class Main extends React.Component{
  constructor(){
    super();

    this.state = {
      articles:[]

      }
      this.makeRequest = this.makeRequest.bind(this)
      this.saveArticle = this.saveArticle.bind(this)
    }

    makeRequest (topic, startDate, endDate){
      axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params:{
          "api-key": "28b89b8baced4c74acdd7abdb5737fa9",
          "q": topic,
          "begin_date": startDate,
          "end_date": endDate
        }
      }).then(response=>{
        console.log(response)
        this.setState({
          articles: [response.data.response.docs[0],
                     response.data.response.docs[1],
                     response.data.response.docs[2],
                     response.data.response.docs[3],
                     response.data.response.docs[4]]
                   })
        })
      }

      saveArticle(title, link, date){
        axios.
          post('./api', {
            title: title,
            link: link,
            date: date
          }).then(response=>{
            console.log(response)
          })
      }






    render(){

      return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Navbar >
              <Navbar.Header className="navbar">
                <Navbar.Brand bsClass="brandName">
                  <a href="#" bsClass="title">NYT Article Search</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav  bsStyle="pills" activeKey={1} pullRight >
                  <LinkContainer className="navBtns" exact to="/"><NavItem >Home</NavItem></LinkContainer>
                  <LinkContainer exact className="navBtns" to="/saved"><NavItem eventKey={2} >Saved</NavItem></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row bsClass="row">
          <Col bsClass="col" xs={12} fluid >
            <PageHeader>New York Times Article Search <small>Search and annotate articles of interest!</small></PageHeader>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div>
            <Switch>
              <Route exact path= "/" render={(props)=><Search makeRequest={this.makeRequest} articles = {this.state.articles} saveArticle ={this.saveArticle}/>} />
              <Route exact path = "/saved" component={Saved} />
            </Switch>
          </div>
        </Col>
      </Row>
    </Grid>


      )
    }
  }



export default Main
