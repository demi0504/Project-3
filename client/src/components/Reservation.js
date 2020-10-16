import React, { Component } from 'react'
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";
import Calendar from 'react-calendar';
import API from "../utils/API";
import Axios from 'axios';
import 'react-calendar/dist/Calendar.css';

class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date:null
    }
  }

  onChange = date => {
    console.log(date)
    this.setState({ date })
}

  handleReservation(event) {
    API.createReservation(
      {
        dateStart: this.state.date[0],
        dateEnd: this.state.date[1]
      })
      .then(res => {
        console.log(res)
    })
    .catch(error => {
        this.setState({ date: null })
        console.table(error);
    })
  }

  render() {
    return (
      <div>
        <div className="section">
        <Container>
          <Columns>
            <Columns.Column className="is-5 is-offset-1">
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                selectRange
              />
              <Button className="reserve-button is-medium is-dark" onClick={() => this.handleReservation()}>Reserve</Button>
            </Columns.Column>
            <Columns.Column>
              <div className="about">Price Per Night: </div>
              <div className="about">Total Cost: </div>
            </Columns.Column>
          </Columns>
        </Container>
        </div>
      </div>
    )
  }
}

export default Reservation;
