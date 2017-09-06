import React from 'react'
import { Panel, Button} from 'react-bootstrap';
import axios from "axios"


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
      <Panel>
        <a href={this.state.link}>{this.state.title}</a>
        <Button type="submit" onClick = {this.handleSave}> Save</Button>
      </Panel>
    )
  }
}

export default Results
