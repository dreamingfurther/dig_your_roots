import React from 'react'
import { Row, Column } from 'react-foundation';
import { Field } from 'redux-form';

const Phone = () => {
  return(
    <Row>
      <Column small={12} medium={3}>
        Phone
      </Column>
      <Column small={12} medium={9}>
        <Field name="phone" component="input" id="rsvp-phone" />
      </Column>
    </Row>
  )
}

export default Phone;
