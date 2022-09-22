import { Formik, Field, Form, ErrorMessage } from "formik";

export default function NameEditForm() {
  return (
    <section className="sign-in-content">
      <Formik
        // initialValues={initialValues}
        // validationSchema={validationSchema}
        // onSubmit={handleLogin}
      >
        <Form>
          <div className="form-fields">
            <div className="input-wrapper">
              <label htmlFor="firstname"></label>
              <Field name="firstname" type="text" id="username" />
              <ErrorMessage name="firstname" component="div" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname"></label>
              <Field name="lastname" type="text" id="lastname" />
              <ErrorMessage name="lastname" component="div" />
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="sign-in-button">
              Save
            </button>
            <button type="submit" className="sign-in-button">
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
