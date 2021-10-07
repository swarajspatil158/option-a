import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function Container() {
    const dropdownOptions = [
        {key: 'English',value:'english'},
        {key: 'Hindi',value:'hindi'},
        {key: 'Marathi',value:'marathi'},
        {key: 'Bengali',value:'bengali'}
    ]
    const initialValues = {
        name:'',
        designation:'',
        language:[]

    }
    const validationSchema = Yup.object({
        name:Yup.string().required('Required'),
        designation:Yup.string().required('Required'),
        language:Yup.string().required('Required')
    })
    const onSubmit = values => console.log('Form data', values);
    return (
        <div>
          <Formik 
          initialValues={initialValues} validationSchema = {validationSchema} 
          onSubmit = {onSubmit}
          >
              {
                  formik => {
                  return (
                    <Form>
                      <FormikControl
                        control='input'
                        type='name'
                        label='Name'
                        name='name'
                      />
                      <FormikControl
                        control='input'
                        label='Designation'
                        name='designation'
                        />
                        <FormikControl
                        control='select'
                        label='Language'
                        name='language'
                        options={dropdownOptions}
                        />
                      <button type='submit' disabled={!formik.isValid}>
                        Submit
                      </button>
                    </Form>
                  )
                  }
            }
        </Formik>  
        </div>
    )
}

export default Container
