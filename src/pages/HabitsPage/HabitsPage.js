import React, { Component } from 'react';
import styles from './HabitsPage.module.scss';
import Modal from '../../components/Modal/Modal';
import HabitForm from '../../components/HabitForm/HabitForm';

class HabitPage extends Component {
  state = {
    showModal: false,
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
      </section>
    );
  }
}

export default HabitPage;
