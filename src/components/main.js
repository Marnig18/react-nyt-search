import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Grid, PageHeader, Row, Col, Navbar, NavItem, Nav,Button, Image} from 'react-bootstrap'
import axios from 'axios'
import Search from './search'
import Saved from './saved'
import {LinkContainer} from 'react-router-bootstrap'
import style from "../css/style.css"
import image from "../css/NYT-api-logo.png"

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

      saveArticle(title, link, image, date){
        axios.
          post('./api', {
            title: title,
            link: link,
            image: image,
            date: date
          }).then(response=>{
            console.log(response)
          })
      }






    render(){

      const footer = (
      <Grid fluid bsClass="footer">
        <Row >
          <Col xs={4}  responsive>
            <Image src={image} bsClass='image'/>
          </Col>
          <Col xs={4}><p bsClass="created">Created By Marni Gross</p></Col>
          <Col xs={4}><a  bsClass="github" href="https://github.com/Marnig18/react-nyt-search"><p>Github</p></a></Col>
        </Row>
      </Grid>
      )

      return(
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Navbar >
              <Navbar.Header className="navbar">
                <Navbar.Brand bsClass="brandName center-align">
                  <a href="#" bsClass="title">NYT Article Search</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav  bsStyle="pills" activeKey={1} pullRight bsClass="navButtons">
                  <LinkContainer  exact to="/"><NavItem bsClass="navItem" eventKey={1}>Home</NavItem></LinkContainer>
                  <LinkContainer exact to="/saved"><NavItem eventKey={2} bsClass="navItem" >Saved</NavItem></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row bsClass="row">
          <Col xs={2}></Col>
          <Col bsClass="col" xs={8} fluid >
            <PageHeader>New York Times Article Search <small>Search and annotate articles of interest!</small></PageHeader>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="articlesDiv">
              <Switch>
                <Route exact path= "/" render={(props)=><Search makeRequest={this.makeRequest} articles = {this.state.articles} saveArticle ={this.saveArticle}/>} />
                <Route exact path = "/saved" component={Saved} />
              </Switch>
            </div>
          </Col>
        </Row>
        {footer}
      </Grid>

      )
    }
  }



export default Main
