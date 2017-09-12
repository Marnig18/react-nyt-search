import React from 'react'
import { Panel, Button, Row, Col, Image} from 'react-bootstrap';
import axios from "axios"
import style from '../css/searchcss.css'


class Results extends React.Component{
  constructor(){
    super();

    this.state={
      title:"",
      link: "",
      image: "",
      date: ""
    }
  }

  componentWillMount(){
    this.setState({
      title: this.props.title,
      link: this.props.link,
      image: this.props.image,
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
        image: this.state.image,
        date: this.state.date
      }).then(response=>{
        console.log(response)
        console.log("Article saved")
  })
}

  render(){
    return(

        <Row>
          <Col xs={3}>
            <Image src= {this.state.image} responsive/>
          </Col>
          <Col xs={7}>
            <a  href={this.state.link} className="articleTitle">{this.state.title}</a>
        </Col>
        <Col xs={2}>
          <Button bsClass="saveBtn" type="submit" onClick = {this.handleSave}> Save</Button>
        </Col>
      </Row>

    )
  }
}

export default Results
