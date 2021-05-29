import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './Form2.module.css';
import PropTypes from 'prop-types';
import { HexColorPicker } from 'react-colorful';
// import { Button } from 'react-native'
import Toggle from './Toggle';
// import FlipToggle from "./Color";
import line from '../../images/mobile/modal-habit-bottom.png';

// import line1 from "../../images/line1.png";
// import line2 from "../../images/line2.png";

class Form2 extends Component {
  state = {
    name: '',
    habit: '',
  };

  Сolor = () => {
    const { color, setColor } = this;
    return <HexColorPicker color={color} onChange={setColor} />;
  };

  handleChange = elem => {
    const { name, value } = elem.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = elem => {
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
      name: '',
      habit: '',
    });
  };

  render() {
    const { name, habit } = this.state;
    return (
      <>
        <div className={classes.form}>
          <h1 className={classes.label}>Новая Привычка</h1>
          <h4 className={classes.name}>Название</h4>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Зарядка"
            onChange={this.handleChange}
            id="nameInput"
            className={classes.input}
          />
        </div>

        <form onSubmit={this.handleSubmit} className={classes}>
          <label htmlFor="textInput" className={classes.motiv}>
            Мотивируй себя
          </label>
          <input
            type="motiv"
            name="motivation"
            onChange={this.handleChange}
            id="numberInput"
            placeholder="..."
            className={classes.input1}
          />

          <label htmlFor="button" className={classes.label1}>
            Повторять
            {/* <input
              type="button"
              name="number"
              placeholder=""
              onChange={this.handleChange}
            /> */}
            <select className={classes.option}>
              <option value="day">Каждый день</option>
              <option value="week">Каждую неделю</option>
              <option selected value="month">
                Каждый месяц
              </option>
            </select>
          </label>
          <label htmlFor="numberInput" className={classes.repeat}>
            Выбери цвет
            <select className={classes.colorOpt}>
              <option
                type="submit"
                value="cyan"
                className={classes.color1}
              ></option>
              <option
                className={classes.color2}
                type="submit"
                value="blue"
                url=""
              ></option>
              <option
                className={classes.color3}
                type="submit"
                value="red"
                url=""
              ></option>
            </select>
          </label>

          <Toggle>
            <form action=""></form>
          </Toggle>

          {/* <FlipToggle /> */}

          <button
            className={classes.save}
            type="submit"
            disabled={!name.length || !habit.length}
          >
            Сохранить
          </button>
          <img src={line} alt={'line'} className={classes.line} />
          {/* <img src={line1} alt={'line1'} className={classes.line1} />
          <img src={line2} alt={'line2'} className={classes.line2} /> */}
        </form>
      </>
    );
  }
}

Form2.propTypes = {
  addHabit: PropTypes.func.isRequired,
};
export default Form2;
