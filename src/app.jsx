import React, { PureComponent } from "react";

import Habits from "./components/habits";
import NavBar from "./components/navBar";

import "./app.css";

class app extends PureComponent {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // const newHabit = [...this.state.habits];
    // const index = newHabit.indexOf(habit);
    // newHabit[index].count++;
    // this.setState({ newHabit });
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // const newHabit = [...this.state.habits];
    // const index = newHabit.indexOf(habit);
    // const count = newHabit[index].count - 1;
    // newHabit[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: habit.count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const newHabit = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: newHabit }); //객체의 키 이름과 변수명이 다르다!!!! habits를 필터링해서 가져오는것이기 때문에 객체의 키 이름은 habit임
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <NavBar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default app;
