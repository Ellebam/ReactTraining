import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    //previous line will add classnames based on triggered error
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} /*autoComplete ='off' */ />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error' //the 'error' className will make semantic ui
        //show all error messages, which are blocked by default
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button secondary'>Submit </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title!';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description!';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

//the following code is how the StreamCreate component was wrapped up inside
//a reduxForm. Up is the reduxForm wrapper wrapped inside the connect function
/*export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);*/
