import React from 'react'
import { ListGroupItem} from 'react-bootstrap';
import { ListGroup, } from 'react-bootstrap'
import Results from './results'
import style from '../css/searchcss.css'

class ResultsList extends React.Component{
  constructor(){
    super();


  }
  render(){
    return(
      <ListGroup bsClass="resultspanel">
        {this.props.articles.map(item =>
        <ListGroupItem key={item._id} bsClass="resultslistitems" >
          <Results saveArticle={this.props.saveArticle} title={item.headline.main} link={item.web_url} image= {"https://www.nytimes.com/" + item.multimedia[0].url} date={item.pub_date}/>
        </ListGroupItem>
        )}
      </ListGroup>
    )
  }
}

export default ResultsList
