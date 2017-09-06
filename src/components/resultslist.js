import React from 'react'
import { ListGroupItem} from 'react-bootstrap';
import { ListGroup, } from 'react-bootstrap'
import Results from './results'

class ResultsList extends React.Component{
  constructor(){
    super();


  }
  render(){
    return(
      <ListGroup>
        {this.props.articles.map(item =>
        <ListGroupItem key={item._id} >
          <Results saveArticle={this.props.saveArticle} title={item.headline.main} link={item.web_url} date={item.pub_date}/>
        </ListGroupItem>
        )}
      </ListGroup>
    )
  }
}

export default ResultsList
