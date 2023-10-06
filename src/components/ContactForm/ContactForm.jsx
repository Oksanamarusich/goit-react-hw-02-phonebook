import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { nanoid } from 'nanoid';

const formSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This field is required!'),
  number: Yup.number().max(13).required('This field is required!'),
  
});

// addQuiz = newQuiz => {
//     this.setState(prevState => ({
//       quizItems: [...prevState.quizItems, { ...newQuiz, id: nanoid() }],
//     }));
// };


  
export const ContactForm = () => {
    return (<Formik initialValues={{
        name: '',
        number: '',
    }}
        validationSchema={formSchema}>
        onSubmit={(values, actions) => {
        //onAdd(values);
        actions.resetForm();
      }}
          <Form>
        <label>
          Name
          <Field  name="name"  />
        </label>
        <label>
          Number
          <Field  name="number" />
        </label>
        <button type = "submit">Add contact</button>
        </Form>
      </Formik>)
}



