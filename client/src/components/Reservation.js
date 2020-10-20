import React, { Component } from 'react'
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";
import Calendar from 'react-calendar';
import API from "../utils/API";
import passport from 'passport';
import Axios from 'axios';
import 'react-calendar/dist/Calendar.css';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
      date: null
    }
  }

  onChange = date => {
    this.setState({ date })
}

  handleReservation(event) {
    const { id } = this.props.match.params;
    API.createReservation(
      {
        dateStart: this.state.date[0],
        dateEnd: this.state.date[1],
        id
      })
      .then(res => {
        console.log(res)
    })
    .catch(error => {
        this.setState({ date: null })
        console.table(error);
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    API.getFacilityId(id)
      .then(res => {
        // console.log("res: ", res.data)
        this.setState({ info: res.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {  
    const { info } = this.state
    return (
      <div>
        <div className="section">
        <Container>
          <Columns>
            <Columns.Column className="is-5 is-offset-1">
              <h1 className="bizName">{info.name}</h1>
              
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                selectRange
              />
              <Button className="reserve-button is-medium is-dark" onClick={() => this.handleReservation()}>Reserve</Button>
            </Columns.Column>
            <Columns.Column>
              <div className="about search-margin">{info.about}</div>
              <div className="about search-margin">{info.phone}</div>              
            </Columns.Column>
          </Columns>
        </Container>
        </div>
      </div>
    )
  }
}

export default Reservation;

// {console.log("try: ", this.state.info.boardingServices)}
//               {this.state.info.boardingServices.map((sub) => {
//                 const price = sub.service1[0].price;
//                 return (
//                   console.log("please", price)
//                 )
//               })}
