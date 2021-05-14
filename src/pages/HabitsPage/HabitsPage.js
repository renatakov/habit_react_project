import React, { Component } from 'react';
import styles from './HabitsPage.module.scss';
import Modal from '../../components/Modal/Modal';
import HabitForm from '../../components/HabitForm/HabitForm';
import { Link } from 'react-router-dom';

class HabitPage extends Component {
  state = {
    showModal: false,
    habitsList: [
      {
        id: '1',
        name: 'зарядка',
        perfomance: '50%',
      },
      {
        id: '2',
        name: 'зарядка2',
        perfomance: '50%',
      },
    ],
  };
  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <section className={styles.habitPage}>
        <div class={styles.top}>
          <button onClick={this.showModal} class={styles.btn}>
          &#43;
          </button>
          {this.state.showModal && (
            <Modal toggleModal={this.showModal}>
              <HabitForm />
            </Modal>
          )}
          <button class={styles.camera} alt="logo" />
        </div>
        <h1 class={styles.text}>Привычки</h1>
        <div id="calendar" class={styles.calendar}>
          <input type="date" name="calendar" />
        </div>
        {this.state.habitsList.length && (
          <ul>
            {this.state.habitsList.map(habit => {
              return (
                <li className={styles.habitItem} key={habit.id}>
                  <Link to="/habitItem">{habit.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    );
  }
}

export default HabitPage;
