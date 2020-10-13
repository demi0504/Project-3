import React, { Component } from 'react'
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";
import Calendar from 'react-calendar';
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

    render() {
        return (
          <div>
            <Calendar
            onChange={this.onChange}
            value={this.state.date}
            selectRange
            />
            </div>
        )
    }
}

export default Reservation;
