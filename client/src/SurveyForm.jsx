import React from 'react';
import { useForm } from 'react-hook-form';
import NavigationBar from './NavigationBar'

const SurveyForm = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // send the data to your server or perform other actions here
  };

  return (
    <div>
      <NavigationBar />
      <h2>Student Survey</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* School Name */}
        <div>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            {...register('schoolName', { required: 'School name is required' })}
          />
          {errors.schoolName && <p>{errors.schoolName.message}</p>}
        </div>

        {/* Online Classes Rating */}
        <div>
          <label>How do you rate your experience with online classes?</label>
          <select {...register('onlineClassesRating', { required: 'Rating is required' })}>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          {errors.onlineClassesRating && <p>{errors.onlineClassesRating.message}</p>}
        </div>

        {/* In-Person Classes Rating */}
        <div>
          <label>How do you rate your experience with in-person classes?</label>
          <select {...register('inPersonClassesRating', { required: 'Rating is required' })}>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
          {errors.inPersonClassesRating && <p>{errors.inPersonClassesRating.message}</p>}
        </div>

        {/* Productivity Level */}
        <div>
          <label>How would you rate your productivity in classes?</label>
          <input
            type="range"
            min="0"
            max="10"
            {...register('productivityRating', { required: 'Rating is required' })}
          />
          <p>{watch('productivityRating')}</p>
          {errors.productivityRating && <p>{errors.productivityRating.message}</p>}
        </div>

        <button type="submit">Submit Survey</button>
      </form>
    </div>
  );
};

export default SurveyForm;