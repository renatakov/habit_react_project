import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./Form.module.css";
import PropTypes from "prop-types";
import { HexColorPicker } from "react-colorful";
// import { Button } from 'react-native'
import Toggle from "./Toggle";
// import FlipToggle from "./Color";

class Form extends Component {
  state = {
    name: "",
    habit: "",
  };

  Сolor = () => {
    const { color, setColor } = this;
    return <HexColorPicker color={color} onChange={setColor} />;
  };

  handleChange = (elem) => {
    const { name, value } = elem.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (elem) => {
    elem.preventDefault();
    const { name, number } = this.state;
    const habits = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addHabit(habits);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      habit: "",
    });
  };

  render() {
    const { name, habit } = this.state;
    return (
      <>
        <h1>Новая Привычка</h1>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <label htmlFor="nameInput" className={classes.label}>
            Название
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Зарядка"
              onChange={this.handleChange}
              id="nameInput"
            />
          </label>

          <label htmlFor="textInput" className={classes.label}>
            Мотивируй себя
            <input
              type="motiv"
              name="motivation"
              onChange={this.handleChange}
              id="numberInput"
            />
          </label>
          <label htmlFor="button" className={classes.label}>
            Повторять
            {/* <input
              type="button"
              name="number"
              placeholder=""
              onChange={this.handleChange}
              id="buttonInput"
            /> */}
            <select>
              <option value="day">Каждый день</option>
              <option value="week">Каждую неделю</option>
              <option selected value="month">
                Каждый месяц
              </option>
            </select>
          </label>
          <label htmlFor="numberInput" className={classes.label}>
            Выбери цвет
            <select>
              <option type="color" value="blue"></option>
              <option type="color" value="cyan"></option>
              <option type="color" value="red"></option>
            </select>
          </label>

          <Toggle>
            <form action=""></form>
          </Toggle>

            {/* <FlipToggle /> */}

          <button
            type="submit"
            className={classes.button}
            disabled={!name.length || !habit.length}
          >
            Сохранить
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  addHabit: PropTypes.func.isRequired,
};
export default Form;
