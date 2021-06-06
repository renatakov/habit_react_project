import React, { Component } from 'react';
import styles from './HabitsPage.module.scss';
import Modal from '../../components/Modal/Modal';
import HabitForm from '../../components/HabitForm/HabitForm';

import { Link } from 'react-router-dom';
import image from '../../images/camera.png';
//{
//   id: '1',
//   name: 'зарядка',
//   perfomance: '50%',
// },
// {
//   id: '2',
//   name: 'зарядка2',
//   perfomance: '50%',
// },

class HabitPage extends Component {
  state = {
    showModal: false,
    habitsList: [],
  };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const { habitsList } = this.state;
    return (
      <section className={styles.habitPage}>
        <div className={styles.top}>
          <img src={image} className={styles.camera} alt="logo" />
          <button onClick={this.showModal} className={styles.btn}>
            &#43;
          </button>
          {this.state.showModal && (
            <Modal toggleModal={this.showModal}>
              {/* <HabitForm /> */}
              <HabitForm />
            </Modal>
          )}
        </div>
        <div id="calendar" className={styles.calendar}>
          <h1 className={styles.text}>Привычки</h1>
          <input type="date" name="calendar" />
        </div>
        {habitsList.length <= 0 ? (
          <p className={styles.defaultText}>
            У вас пока нет привычек <br />
            Нажмите +, чтобы <br />
            добавить первую
          </p>
        ) : (
          <ul>
            {habitsList.map(habit => {
              return (
                <li className={styles.habitItem} key={habit.id}>
                  <Link to="/habitItem">{habit.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
        {/* {this.state.habitsList.length && ()} */}
      </section>
    );
  }
}

export default HabitPage;
