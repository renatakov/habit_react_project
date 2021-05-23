import React from 'react';
import styles from './UserPage.module.scss';
import { NavLink } from 'react-router-dom';

const getFile = event => {
  // let files = event.target.files,
  //   filename = files[0].name,
  //   fr = new FileReader();
  //   fr.onload = function () {
  //     console.log(fr.result);
  //     document.querySelector(".avatarImage").src = fr.result;
  // }
  // fr.readAsDataURL(files[0]);
};

const UserPage = () => {
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
            onChange={event => getFile(event)}
          />
          <div className={styles.avatarImage}></div>
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
              />
            </div>
          </div>
          <NavLink to="/habits">
            <button className={styles.createBtn}>Создать</button>
          </NavLink>
        </form>
        <div className={styles.footer}></div>
      </div>
    </>
  );
};

export default UserPage;