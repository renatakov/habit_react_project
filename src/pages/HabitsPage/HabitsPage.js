import React, { Component } from 'react';
import styles from './HabitsPage.module.scss';

class HabitPage extends Component {
  render() {
    return (
      <section className={styles.habitPage}>
        <div class={styles.top}>
          <form action="/developHabit"> 
            <button class={styles.btn}>➕</button>
          </form>
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
