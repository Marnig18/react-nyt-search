import React from 'react'
import { Panel, Button, Row, Col} from 'react-bootstrap';
import axios from "axios"
import style from './css/searchcss.css'


class Results extends React.Component{
  constructor(){
    super();

    this.state={
      title:"",
      link: "",
      date: ""
    }
  }

  componentWillMount(){
    this.setState({
      title: this.props.title,
      link: this.props.link,
      date: this.props.date
    })
    this.handleSave = this.handleSave.bind(this)
  }


  handleSave(event){
    event.preventDefault()
    console.log("handleSave Called")
    axios.post('./api', {
        title: this.state.title,
        link: this.state.link,
        date: this.state.date
      }).then(response=>{
        console.log(response)
        console.log("Article saved")
  })
}

  render(){
    return(

        <Row>
          <Col xs={10}>
            <a href={this.state.link}>{this.state.title}</a>
        </Col>
        <Col xs={2}>
          <Button type="submit" onClick = {this.handleSave}> Save</Button>
        </Col>
      </Row>

    )
  }
}

export default Results
