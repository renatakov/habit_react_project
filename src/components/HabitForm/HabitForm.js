import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../../redux/habits/operations';
import { HexColorPicker } from 'react-colorful';
import classes from './Form.module.scss';

export default function From() {
  const [name, setName] = useState('');
  const [motivation, setMotivation] = useState('');
  const [color, setColor] = useState('');
  const [repeat, setRepeat] = useState('');
  const [remindMe, setRemindMe] = useState(true);
  const [habits, setHabits] = useState([]);

  const dispatch = useDispatch();

  const Сolor = () => {
    const { color, setColor } = this;
    return <HexColorPicker color={color} onChange={setColor} />;
  };
  const handleChange = e => {
    const { value, name, checked } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'motivation':
        setMotivation(value);
        return;
      case 'color':
        setColor(value);
        break;
      case 'repeat':
        setRepeat(1);
        break;
      case 'remindMe':
        setRemindMe(checked);
        break;

      default:
        console.warn('Проверьте пожалуйста input');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const habit = {
      name,
      motivation,
      color,
      repeat,
      remindMe,
    };
    console.log(habit);
    // dispatch(addHabit(habit));
    setHabits(habits.push(habit));
    
    localStorage.setItem('habit', JSON.stringify(habits));
    reset();
  };
  const reset = () => {
    setName('');
    setMotivation('');
    setColor('');
    setRepeat('');
    setRemindMe(true);
  };
  return (
    <div className={classes.modal}>
      <div className={classes.formHeader}>
        <div className={classes.closeModal}>
          <h1 className={classes.title}>Новая Привычка</h1>
          <button className={classes.closeBtn}>x</button>
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
          id="nameInput"
          className={classes.input}
        />
        <textarea
          name="motivation"
          onChange={handleChange}
          id="numberInput"
          placeholder="Мотивируй себя"
          className={classes.input1}
        ></textarea>

        <label htmlFor="button" className={classes.label}>
          Повторять
          <select
            className={classes.option}
            onChange={handleChange}
            name="repeat"
          >
            <option value="day" selected>
              Каждый день
            </option>
            <option value="week">Каждую неделю</option>
            <option selected value="month">
              Каждый месяц
            </option>
          </select>
        </label>
        <label htmlFor="numberInput" className={classes.label}>
          Выбери цвет
          <select
            className={classes.option}
            name="color"
            onChange={handleChange}
          >
            <option
              selected
              value="cyan"
              className={classes.color1}
              // name="color"
              // onChange={handleChange}
            >
              color 1
            </option>
            <option
              value="blue"
              className={classes.color2}
              // name="color"
              // onChange={handleChange}
            >
              color 2
            </option>
            <option
              value="red"
              className={classes.color3}
              // onChange={handleChange}
              // name="color"
            >
              color 3
            </option>
          </select>
        </label>

        {/* <FlipToggle /> */}

        <label className={classes.label}>
          Напомнить мне
          {/* <label class="switch"> */}
          {/* </label> */}
          <div className={classes.switch}>
            <input type="checkbox" name="remindMe" onChange={handleChange} />
            <span className={classes.slider}></span>
          </div>
          {/* <button
            className={classes.on}
            onClick={handleClick}
            name="remindMe"
          >
            {isToggleOn ? 'Включено' : 'Выключено'}
          </button> */}
          {/* <Toggle>
            <form action=""></form>
          </Toggle> */}
        </label>
        <button
          className={classes.save}
          type="submit"
          // disabled={!name.length || !habit.length}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
// ===============
// import { Button } from 'react-native'
// import Toggle from './Toggle';
// import FlipToggle from "./Color";
// import line1 from "../../images/line1.png";
// import line2 from "../../images/line2.png";
// import { v4 as uuidv4 } from 'uuid';
// import React, { Component } from 'react';
// import classes from './Form.module.scss';
// import PropTypes, { func } from 'prop-types';
// import { HexColorPicker } from 'react-colorful';
// import { addHabit } from '../../redux/habits/operations';
// import { connect } from 'react-redux';
// console.log(addHabit);
// class Form extends Component {
//   state = {
//     name: '',
//     motivation: '',
//     color: '',
//     repeat: 0,
//     remindMe: true,
//     habit: '',
//   };

//   Сolor = () => {
//     const { color, setColor } = this;
//     return <HexColorPicker color={color} onChange={setColor} />;
//   };

//   handleChecke = e => {
//     const { name, checked } = e.target;

//     this.setState({
//       [name]: checked,
//     });
//   };
//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, motivation, color, repeat, remindMe } = this.state;
//     // const habits = {
//     //   id: uuidv4(),
//     //   name: name,
//     //   number: number,
//     // };
//     const habit = {
//       name,
//       motivation,
//       color,
//       repeat,
//       remindMe,
//     };
//     console.log(habit);
//     this.props.addHabit(habit);
//     // console.log(`SUBMIT`);
//     // console.log(this.props.addHabit);
//     // this.props.addHabit({ ...this.state });

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       habit: '',
//     });
//   };

//   render() {
//     const { name, habit } = this.state;
//     const { handleChange, handleSubmit, handleChecke } = this;
//     return (
//       <div className={classes.modal}>
//         <div className={classes.formHeader}>
//           <div className={classes.closeModal}>
//             <h1 className={classes.title}>Новая Привычка</h1>
//             <button className={classes.closeBtn}>x</button>
//           </div>
//           <h4 className={classes.name}>Название</h4>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Зарядка"
//             onChange={handleChange}
//             id="nameInput"
//             className={classes.input}
//           />
//         </div>

//         <form onSubmit={handleSubmit} className={classes.formBody}>
//           <textarea
//             name="motivation"
//             onChange={handleChange}
//             id="numberInput"
//             placeholder="Мотивируй себя"
//             className={classes.input1}
//           ></textarea>

//           <label htmlFor="button" className={classes.label}>
//             Повторять
//             <select
//               className={classes.option}
//               onChange={handleChange}
//               name="repeat"
//             >
//               <option value="day" selected>
//                 Каждый день
//               </option>
//               <option value="week">Каждую неделю</option>
//               <option selected value="month">
//                 Каждый месяц
//               </option>
//             </select>
//           </label>
//           <label htmlFor="numberInput" className={classes.label}>
//             Выбери цвет
//             <select
//               className={classes.option}
//               name="color"
//               onChange={handleChange}
//             >
//               <option
//                 selected
//                 value="cyan"
//                 className={classes.color1}
//                 // name="color"
//                 // onChange={handleChange}
//               >
//                 color 1
//               </option>
//               <option
//                 value="blue"
//                 className={classes.color2}
//                 // name="color"
//                 // onChange={handleChange}
//               >
//                 color 2
//               </option>
//               <option
//                 value="red"
//                 className={classes.color3}
//                 // onChange={handleChange}
//                 // name="color"
//               >
//                 color 3
//               </option>
//             </select>
//           </label>

//           {/* <FlipToggle /> */}

//           <label className={classes.label}>
//             Напомнить мне
//             {/* <label class="switch"> */}
//             {/* </label> */}
//             <div className={classes.switch}>
//               <input type="checkbox" name="remindMe" onChange={handleChecke} />
//               <span className={classes.slider}></span>
//             </div>
//             {/* <button
//               className={classes.on}
//               onClick={handleClick}
//               name="remindMe"
//             >
//               {isToggleOn ? 'Включено' : 'Выключено'}
//             </button> */}
//             {/* <Toggle>
//               <form action=""></form>
//             </Toggle> */}
//           </label>
//           <button
//             className={classes.save}
//             type="submit"
//             disabled={!name.length || !habit.length}
//           >
//             Сохранить
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = {
//   addHabit,
// };
// Form.propTypes = {
//   addHabit: PropTypes.func.isRequired,
// };
// export default connect(null, mapDispatchToProps)(Form);
// =================================================
// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import classes from "./HabitForm.module.scss";
// import PropTypes from "prop-types";
// import { HexColorPicker } from "react-colorful";
// // import { Button } from 'react-native'
// import Toggle from "./Toggle";
// // import FlipToggle from "./Color";

// class Form extends Component {
//   state = {
//     name: "",
//     habit: "",
//   };

//   Сolor = () => {
//     const { color, setColor } = this;
//     return <HexColorPicker color={color} onChange={setColor} />;
//   };

//   handleChange = (elem) => {
//     const { name, value } = elem.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (elem) => {
//     elem.preventDefault();
//     const { name, number } = this.state;
//     const habits = {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     };
//     this.props.addHabit(habits);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       habit: "",
//     });
//   };

//   render() {
//     const { name, habit } = this.state;
//     return (
//       <>
//         <h1>Новая Привычка</h1>
//         <form onSubmit={this.handleSubmit} className={classes.form}>
//           <label htmlFor="nameInput" className={classes.label}>
//             Название
//             <input
//               type="text"
//               name="name"
//               value={name}
//               placeholder="Зарядка"
//               onChange={this.handleChange}
//               id="nameInput"
//             />
//           </label>

//           <label htmlFor="textInput" className={classes.label}>
//             Мотивируй себя
//             <input
//               type="motiv"
//               name="motivation"
//               onChange={this.handleChange}
//               id="numberInput"
//             />
//           </label>
//           <label htmlFor="button" className={classes.label}>
//             Повторять
//             {/* <input
//               type="button"
//               name="number"
//               placeholder=""
//               onChange={this.handleChange}
//               id="buttonInput"
//             /> */}
//             <select>
//               <option value="day">Каждый день</option>
//               <option value="week">Каждую неделю</option>
//               <option selected value="month">
//                 Каждый месяц
//               </option>
//             </select>
//           </label>
//           <label htmlFor="numberInput" className={classes.label}>
//             Выбери цвет
//             <select>
//               <option type="color" value="blue"></option>
//               <option type="color" value="cyan"></option>
//               <option type="color" value="red"></option>
//             </select>
//           </label>

//           <Toggle>
//             <form action=""></form>
//           </Toggle>

//             {/* <FlipToggle /> */}

//           <button
//             type="submit"
//             className={classes.button}
//             disabled={!name.length || !habit.length}
//           >
//             Сохранить
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// Form.propTypes = {
//   addHabit: PropTypes.func.isRequired,
// };
// export default Form;
