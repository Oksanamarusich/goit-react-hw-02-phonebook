import { Formik,Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


 const FormSchema = Yup.object().shape({
   name:  Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This field is required'),
   number: Yup.string()
     .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format 000-00-00!")
     .required('This field is required'),
  
 });

export const ContactForm = ({ onAdd }) => {
  return <div>
     <Formik
    initialValues={{
      name: '',
      number: '',
      
      }}
    validationSchema={FormSchema}
    onSubmit={(values, actions) => {
      onAdd(values);
      actions.resetForm();
    }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name ="name"/>
        </label>
        
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name ="number"/>
        </label>
        

        
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  

  </div>
}
