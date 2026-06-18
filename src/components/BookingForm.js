import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // We define the physical layout of the restaurant here to make the 
  // table selection feature fully interactive and visual for the user.
  const tables = [
    { id: 'T1', type: 'window', capacity: 2 },
    { id: 'T2', type: 'window', capacity: 4 },
    { id: 'T3', type: 'center', capacity: 6 },
    { id: 'T4', type: 'center', capacity: 4 },
    { id: 'T5', type: 'patio', capacity: 2 },
    { id: 'T6', type: 'patio', capacity: 8 },
  ];

  // Using Formik as taught in the Advanced React course for robust form state management.
  // It handles all the values, touched states, and submit handlers easily.
  const formik = useFormik({
    initialValues: {
      date: '',
      resTime: '',
      guests: 1,
      occasion: 'Birthday',
      table: ''
    },
    // Yup provides an elegant way to define validation rules.
    // I made sure dates in the past are strictly blocked and table selection is required.
    validationSchema: Yup.object({
      date: Yup.date()
        .required('Date is required')
        .min(
          new Date().toISOString().split('T')[0],
          'You cannot book for a past date'
        ),
      resTime: Yup.string().required('Time is required'),
      guests: Yup.number()
        .required('Number of guests is required')
        .min(1, 'At least 1 guest is required')
        .max(10, 'Maximum 10 guests allowed'),
      table: Yup.string().required('Please select a table from the map')
    }),
    onSubmit: (values) => {
      // Pass the fully validated values up to the parent component
      submitForm(values);
    },
  });

  // Custom handler to ensure we update Formik state AND trigger the useReducer 
  // in the parent component to update available times based on the selected date.
  const handleDateChange = (e) => {
    formik.handleChange(e);
    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  return (
    <form className="booking-form" style={{ display: 'grid', gap: '15px' }} onSubmit={formik.handleSubmit}>
      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          name="date"
          value={formik.values.date} 
          onChange={handleDateChange} 
          onBlur={formik.handleBlur}
          min={new Date().toISOString().split('T')[0]}
        />
        {formik.touched.date && formik.errors.date ? <div className="error-text" style={{ color: '#d32f2f', fontSize: '14px', marginTop: '5px' }}>{formik.errors.date}</div> : null}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="res-time">Choose time</label>
        <select 
          id="res-time" 
          name="resTime"
          value={formik.values.resTime} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.resTime && formik.errors.resTime ? <div className="error-text" style={{ color: '#d32f2f', fontSize: '14px', marginTop: '5px' }}>{formik.errors.resTime}</div> : null}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="guests">Number of guests</label>
        <input 
          type="number" 
          id="guests" 
          name="guests"
          placeholder="1" 
          min="1" 
          max="10" 
          value={formik.values.guests} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? <div className="error-text" style={{ color: '#d32f2f', fontSize: '14px', marginTop: '5px' }}>{formik.errors.guests}</div> : null}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion" 
          name="occasion"
          value={formik.values.occasion} 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <div className="table-selection-container">
        <label>Select your Table</label>
        <div className="restaurant-map">
          {tables.map(t => (
            <div 
              key={t.id} 
              className={`table-node ${t.type} ${formik.values.table === t.id ? 'selected' : ''}`}
              onClick={() => formik.setFieldValue('table', t.id)}
            >
              <span className="table-name">{t.id}</span>
              <span className="table-capacity">👤 {t.capacity}</span>
            </div>
          ))}
        </div>
        {formik.touched.table && formik.errors.table ? (
          <div className="error-text" style={{color: '#d32f2f', fontSize: '14px', marginTop: '10px', textAlign: 'center', fontWeight: 'bold'}}>{formik.errors.table}</div>
        ) : (
          formik.values.table && <p className="selected-table-text">Table {formik.values.table} selected</p>
        )}
      </div>

      <input 
        type="submit" 
        className="hero-btn submit-btn" 
        value="Make Your reservation" 
        aria-label="Make your reservation" 
        disabled={!(formik.isValid && formik.dirty)}
        style={{ opacity: !(formik.isValid && formik.dirty) ? 0.5 : 1, cursor: !(formik.isValid && formik.dirty) ? 'not-allowed' : 'pointer' }}
      />
    </form>
  );
};

export default BookingForm;
