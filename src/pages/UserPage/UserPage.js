import React, { Component } from 'react';
import styles from './UserPage.module.scss';
import { NavLink } from 'react-router-dom';

let AvatarImage = {
  backgroundImage: '',
};

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

  getFile = ({ target }) => {
    let filename = target.files[0].name;
    this.setState({ photo: filename });
    console.log(filename);
    AvatarImage = {
      backgroundImage: '/' + filename,
    };
  };

  componentDidMount() {
    this.setState({
      weight: localStorage.getItem('weight'),
      photo: localStorage.getItem('photo'),
      growth: localStorage.getItem('growth'),
      birthDate: localStorage.getItem('birthDate'),
    });
  }

  render() {
    return (
      <>
        <header className={styles.userFormHeader}>
          <NavLink to="/">
            <div className={styles.goBack}>
              <span className={styles.goBackArrow}>&#706;</span>
              <span>Назад</span>
            </div>
          </NavLink>
          <div className={styles.userPhoto}>
            <input
              id={styles.photoUpload}
              className={styles.uploadInput}
              type="file"
              accept="image/*"
              name="photo"
              onChange={this.getFile}
            />
            <div className={styles.avatarImage} style={AvatarImage}></div>
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
                  onChange={this.handleChange}
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
