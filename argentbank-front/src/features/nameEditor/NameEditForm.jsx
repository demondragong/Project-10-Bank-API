import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useEditUserNamesMutation, usePostUserProfileQuery } from "../../slices/api";
import { hide } from "./nameEditor";

export default function NameEditForm() {
  
  const dispatch = useDispatch();

  const { data, error } = usePostUserProfileQuery()

  const [editUserNames, { isLoading }] = useEditUserNamesMutation()

  const handleSaveNames = async (values) => {
    if (!isLoading) {
      try {
        await editUserNames({firstName: values.firstname, lastName: values.lastname}).unwrap()
        dispatch(hide())
      } catch (err) {
        console.error('Failed to save the name:', err)
      }
    }
  }

  return (
      <Formik
        initialValues={{firstname: data.body.firstName, lastname: data.body.lastName}}
        // validationSchema={validationSchema}
        onSubmit={handleSaveNames}
      >
        <Form>
          <div className="form-fields">
            <div className="input-wrapper">
              <label htmlFor="firstname"></label>
              <Field name="firstname" type="text" id="username" autoComplete="off" />
              <ErrorMessage name="firstname" component="div" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname"></label>
              <Field name="lastname" type="text" id="lastname" autoComplete="off" />
              <ErrorMessage name="lastname" component="div" />
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="name-edit-button">
              Save
            </button>
            <button type="button" className="name-edit-button" onClick={() => dispatch(hide())}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
  );
}
