import React, { Component } from "react";

class HabitBar extends Component {
  render() {
    return (
      <header className="navbar">
        <i className="navbar-logo fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default HabitBar;
