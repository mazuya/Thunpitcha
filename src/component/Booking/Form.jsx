import React, { useState, useRef, useReducer } from 'react'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './Book.css';

function Form() {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");

    const handleSubmit = (i) => {
        i.preventDefault();
        setName("");
        setPhone("");
        console.log('Form submitted laja')
    }

    // const DatePickerExample = () => {
    //     const [startDate, setStartDate] = useState(new Date());
      
    //     return (
    //       <DatePicker
    //         value={startDate}
    //         onChange={date => setStartDate(date)}
    //       />
    //     );
    //   };

  const DatePicker2 = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  return (
    <div className='datepick'>
      <h1>Selected Date: </h1>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef} className='datepick-input'
      />
        
        <p>{date}</p>
      
      
    </div>
  );
};

// ############ Reducer ################

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

 const [numberOfPeople, dispatch] = useReducer(reducer, 1);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    if (numberOfPeople > 1) {
      dispatch({ type: 'DECREMENT' });
    }
  };


  const [role, setRole] = useState("role");

  return (
    <div className='Form-Field'>
     
      <form onSubmit={handleSubmit} >
      <div className="Field">
            <label>Name :</label>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>

            
        </div>
        <div className="Field">
          <label>Phone Number:</label>
          <input
              type="tel"
              placeholder='XXX-XXX-XXXX'
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            className='Field2-input'/>
        </div>

        <div className="Field-Datepicker2">
          <DatePicker2/>
        </div>

        <div className="num-people">
          <label>Number of People:</label>
          <button type="button" onClick={decrement}>-</button>
          <span>{numberOfPeople}</span>
          <button type="button" onClick={increment}>+</button>
        </div>

        <div className="Field" id='select-timee'>
          <label>Select time</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
                <option value="12">12.00</option>
                <option value="13">13.00</option>
                <option value="14">14.00</option>
                <option value="15">15.00</option>
                <option value="13">16.00</option>
                <option value="14">17.00</option>
          </select>
        </div>

        <button type='submit' className='form-submitted'>Book table</button>
      </form>
    </div>
  )
}

export default Form
