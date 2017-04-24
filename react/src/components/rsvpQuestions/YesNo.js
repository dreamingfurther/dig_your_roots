import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from 'react-foundation';

const renderField = ({ input, type, id, label }) => (
  <div className="fancy-checkbox">
    <input {...input} type={type} id={id}/>
    <div className="background"></div>
    <label>{ label }</label>
  </div>
)

const YesNo = () => {
  return(
    <div>
      <h1>Will you join us?</h1>
      <Row className="mbl">
        <Column small={12} medium={6} className="mbl">
          <Field name="rsvp" component={renderField} type="radio" value="Yes" id="rsvp-yes" label="Yes"/>
        </Column>
        <Column small={12} medium={6} className="mbl">
          <Field name="rsvp" component={renderField} type="radio" value="No" id="rsvp-no" label="No"/>
        </Column>
      </Row>
    </div>
  )
}

export default YesNo;
