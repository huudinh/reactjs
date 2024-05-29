<Formik
    initialValues={{ email: '' }}
    validate={values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }}
>
    {({ isSubmitting }) => (
        <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    )}
</Formik>

