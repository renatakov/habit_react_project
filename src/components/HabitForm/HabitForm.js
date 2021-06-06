import React, { Component } from 'react';
import classes from './HabitForm.module.scss';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    motivation: '',
    color: '',
    repeat: 1,
    remindMe: true,
    showModal: false,
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

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { name, habit } = this.state;
    const { handleChange, handleSubmit, closeModal } = this;
    return (
      <div className={classes.modal}>
        <div className={classes.formHeader}>
          <div className={classes.closeModal}>
            <h1 className={classes.title}>Новая Привычка</h1>
            <button className={classes.closeBtn} onClick={closeModal}>
              x
            </button>
          </div>
          <h4 className={classes.name}>Название</h4>
        </div>

        <form onSubmit={handleSubmit} className={classes.formBody}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Зарядка"
            onChange={handleChange}
            id="name"
            className={classes.input}
          />
          <textarea
            name="motivation"
            onChange={handleChange}
            id="motivation"
            placeholder="Мотивируй себя"
            className={classes.input1}
          ></textarea>

          <label htmlFor="repeat" className={classes.label}>
            Повторять
            <select
              className={classes.option}
              onChange={handleChange}
              id="repeat"
              name="repeat"
            >
              <option selected value="day">
                Каждый день
              </option>
              <option value="week">Каждую неделю</option>
              <option value="month">Каждый месяц</option>
            </select>
          </label>

          <label htmlFor="color" className={classes.label}>
            Выбери цвет
            <select
              className={classes.option}
              id="color"
              name="color"
              onChange={handleChange}
            >
              <option selected value="cyan" className={classes.color1}>
                Cyan
              </option>
              <option className={classes.color2} value="blue" url="">
                Blue
              </option>
              <option className={classes.color3} value="red" url="">
                Red
              </option>
            </select>
          </label>

          <label htmlFor="remindMe" className={classes.label}>
            Напомнить мне
            <div className={classes.switch}>
              <input
                type="checkbox"
                name="remindMe"
                id="remindMe"
                onChange={handleChange}
              />
              <span className={classes.slider}></span>
            </div>
          </label>

          <button
            className={classes.save}
            type="submit"
            disabled={!name.length || !habit.length}
          >
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addHabit: PropTypes.func.isRequired,
};
export default Form;
