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
      email: '',
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
      email: Yup.string()
        .email('Enter a valid email address')
        .required('Email is required'),
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

  const isSubmitDisabled = !(formik.isValid && formik.dirty);

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          name="date"
          value={formik.values.date} 
          onChange={handleDateChange} 
          onBlur={formik.handleBlur}
          min={new Date().toISOString().split('T')[0]}
          aria-invalid={formik.touched.date && Boolean(formik.errors.date)}
          aria-describedby={formik.touched.date && formik.errors.date ? 'date-error' : undefined}
        />
        {formik.touched.date && formik.errors.date ? <div id="date-error" className="error-text">{formik.errors.date}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select 
          id="res-time" 
          name="resTime"
          value={formik.values.resTime} 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.resTime && Boolean(formik.errors.resTime)}
          aria-describedby={formik.touched.resTime && formik.errors.resTime ? 'time-error' : undefined}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.resTime && formik.errors.resTime ? <div id="time-error" className="error-text">{formik.errors.resTime}</div> : null}
      </div>

      <div className="form-group">
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
          aria-invalid={formik.touched.guests && Boolean(formik.errors.guests)}
          aria-describedby={formik.touched.guests && formik.errors.guests ? 'guests-error' : undefined}
        />
        {formik.touched.guests && formik.errors.guests ? <div id="guests-error" className="error-text">{formik.errors.guests}</div> : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
          aria-describedby={formik.touched.email && formik.errors.email ? 'email-error' : undefined}
        />
        {formik.touched.email && formik.errors.email ? <div id="email-error" className="error-text">{formik.errors.email}</div> : null}
      </div>

      <div className="form-group">
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

      <fieldset className="table-selection-container">
        <legend>Select your Table</legend>
        <div className="restaurant-map" role="group" aria-describedby="table-help">
          {tables.map(t => (
            <button
              type="button"
              key={t.id} 
              className={`table-node ${t.type} ${formik.values.table === t.id ? 'selected' : ''}`}
              onClick={() => formik.setFieldValue('table', t.id)}
              aria-pressed={formik.values.table === t.id}
              aria-label={`Table ${t.id}, ${t.capacity} seats`}
            >
              <span className="table-name">{t.id}</span>
              <span className="table-capacity">{t.capacity} seats</span>
            </button>
          ))}
        </div>
        {formik.touched.table && formik.errors.table ? (
          <div className="error-text table-error">{formik.errors.table}</div>
        ) : (
          <p id="table-help" className="selected-table-text">
            {formik.values.table ? `Table ${formik.values.table} selected` : 'Choose one available table.'}
          </p>
        )}
      </fieldset>

      <input 
        type="submit" 
        className="hero-btn submit-btn" 
        value="Make Your reservation" 
        aria-label="Make your reservation" 
        disabled={isSubmitDisabled}
      />
    </form>
  );
};

export default BookingForm;
