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
            <Calendar
            onChange={this.onChange}
            value={this.state.date}
            selectRange
            />
             <Button className="reserve-button" onClick={() => this.handleReservation()}>Reserve</Button>
            </div>
        )
    }
}

export default Reservation;
