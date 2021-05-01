import React from 'react';
import {Formik} from 'formik';
import {Button, TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-rat-valid', 'It should be between 1 - 5', val => {
      if (parseInt(val) > 0 && parseInt(val) < 6) {
        return true;
      }
      return false;
    }),
});

function ReviewForm(props) {
  return (
    <View>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={values => props.onSubmit(values)}>
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              // automatically handles the state of the form
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="green"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default ReviewForm;
