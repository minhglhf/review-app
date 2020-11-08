import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';
import { globalStyles, images } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/Button'

const ReviewSchema = yup.object({
    title: yup.string()
            .required()
            .min(4),
    body: yup.string()
            .required()
            .min(8),
    rating: yup.string()
            .required()
            .test('is-num-1-to-5', 'Rating mustbe a number 1 - 5', (val) => {
                return parseInt(val) < 6 && parseInt(val) > 0
            })  ,

});

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                validationSchema={ReviewSchema}
                onSubmit={(value, actions) => {
                    actions.resetForm();
                    console.log(value);
                    addReview(value);
                }}
            >
                {
                    props => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')} 
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                style={globalStyles.input}
                                placeholder='Review details'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')} 
                            />
                            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating (1 - 5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('rating')} 
                            />
                            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                            
                            {/* <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> */}
                            <FlatButton text='submit' onPress={props.handleSubmit}/>
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

export default ReviewForm
