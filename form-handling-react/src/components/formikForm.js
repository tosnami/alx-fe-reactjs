import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("name of user  "),
  email: Yup.string().email("gmial is unsuccseful   ").required("needed gemail  "),
  password: Yup.string().min(6, " password lrss than 6 characters").required("needed password"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("sucsseful  :", values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2> creqate account</h2>
          <div>
            <Field type="text" name="username" placeholder="name " />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <Field type="email" name="email" placeholder="gemail " />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <Field type="password" name="password" placeholder=" password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>
          <button type="submit" disabled={isSubmitting}>login</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;