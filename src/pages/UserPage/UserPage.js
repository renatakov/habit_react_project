import React, { Component } from 'react';
import styles from './UserPage.module.scss';
import { NavLink } from 'react-router-dom';

class UserPage extends Component {
  state = {
    photo: '',
    weight: '',
    growth: '',
    birthDate: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    localStorage.setItem([name], value);
  };

  uploadImage = e => {
    const { files } = e.target;
    if (files.length === 0) {
      return;
    }

    if (files[0].size > 2200000) {
      alert('Файл слишком большой!');
      return;
    }

    const file = files[0];
    const fileReader = new FileReader();
    let avatarImage = document.getElementById(styles.avatarImage);

    fileReader.onload = () => {
      avatarImage.style.backgroundImage = `url(${fileReader.result})`;
      this.setState({ photo: fileReader.result });
      localStorage.setItem('photo', fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  componentDidMount() {
    this.setState({
      weight: localStorage.getItem('weight'),
      photo: localStorage.getItem('photo'),
      growth: localStorage.getItem('growth'),
      birthDate: localStorage.getItem('birthDate'),
    });

    let inputs = document.getElementsByClassName(styles.formInputs);
    for (let i = 0; i < inputs.length; i++) {
      inputs.item(i).value = localStorage.getItem([inputs.item(i).name]);
    }
  }

  componentDidUpdate() {
    let avatarImage = document.getElementById(styles.avatarImage);
    avatarImage.style.backgroundImage = `url(${this.state.photo})`;
  }

  render() {
    let now = new Date(),
      day = now.getDay(),
      month = now.getMonth() + 1,
      year = now.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    let maxDate = `${year}-${month}-${day}`;

    return (
      <>
        <header className={styles.userFormHeader}>
          <NavLink to="/">
            <div className={styles.goBack}>
              <span className={styles.goBackArrow}>&#706;</span>
              <span>Назад</span>
            </div>
          </NavLink>
          <div id={styles.userPhoto}>
            <input
              id={styles.photoUpload}
              className={styles.uploadInput}
              type="file"
              accept="image/*"
              name="photo"
              onChange={this.uploadImage}
            />
            <div id={styles.avatarImage}></div>
            <span className={styles.headerPhotoText}>Сменить фото</span>
          </div>
        </header>

        <div>
          <form className={styles.userForm}>
            <div className={styles.inputsData}>
              <div className={styles.dataGroup}>
                <span className={styles.formInputsText}>Рост*</span>
                <input
                  className={styles.formInputs}
                  id={styles.growthInput}
                  type="number"
                  placeholder="170 см"
                  required
                  autoComplete="off"
                  name="growth"
                  onChange={this.handleChange}
                />
              </div>
              <div className={styles.dataGroup}>
                <span className={styles.formInputsText}>Вес*</span>
                <input
                  className={styles.formInputs}
                  id={styles.weightInput}
                  type="number"
                  placeholder="50 кг"
                  required
                  autoComplete="off"
                  name="weight"
                  onChange={this.handleChange}
                />
              </div>
              <div className={styles.dataGroup}>
                <span className={styles.formInputsText}>Дата Рождения*</span>
                <input
                  className={styles.formInputs}
                  id={styles.birthInput}
                  type="date"
                  placeholder="25. 09. 1986"
                  required
                  autoComplete="off"
                  name="birthDate"
                  min="1900-01-01"
                  max={maxDate}
                  onChange={this.handleChange}
                  onKeyDown={e => e.preventDefault()}
                />
              </div>
            </div>
            <NavLink to="/habits">
              <button className={styles.createBtn}>Сохранить</button>
            </NavLink>
          </form>
          <div className={styles.footer}></div>
        </div>
      </>
    );
  }
}

export default UserPage;
