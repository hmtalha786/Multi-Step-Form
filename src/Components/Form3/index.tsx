import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "formik-material-ui-pickers";
import {
  Box,
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import "./form3.css";
import { Agent } from "http";
import * as Yup from "yup";
interface formData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  paymentOption: string;
  cardHolder: string;
  gender: string;
  cardNumber: number;
  contactNumber: number;
  cvc: number;
}
interface MyFormValues {
  paymentOption: string;
  date: string;
  cardHolder: string;
  cardNumber: number;
  cvc: number;
}

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  setFormValue: (e: formData) => void;
  formValue: formData;
}
const Form1 = (props: Props) => {
  let todyaDate: string = new Date().toISOString().slice(0, 10);
  console.log("today daate", todyaDate);

  const initialValues: MyFormValues = {
    paymentOption: props.formValue.paymentOption,
    cardHolder: props.formValue.cardHolder,
    cardNumber: props.formValue.cardNumber,
    date: "",
    cvc: props.formValue.cvc,
  };
  const Validation = Yup.object({
    paymentOption: Yup.string(),
    cardNumber: Yup.string()
      .required("Required")
      .max(16, "Incorrect Length Of Card Number"),
    cardHolder: Yup.string().required().max(12, "Holder Name Is Too Long"),
    cvc: Yup.number().required().max(3, "Incorrect Length"),
  });
  console.log("Form 2 Data", props.formValue);
  return (
    <div className="formBox">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          props.setFormValue({ ...props.formValue, ...values });
          props.handleNext();
        }}
        validationSchema={Validation}
      >
        <Form style={{ margin: "0 auto" }}>
          <div className="formBox">
            <div className="eachField3">
              <InputLabel id="paymentOption">Payment Option</InputLabel>
              <Field
                fullWidth
                id="paymentOption"
                name="paymentOption"
                label="Card Type "
                placeholder="Card Type"
                as={Select}
              >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="Paypal">Paypal</MenuItem>
              </Field>
            </div>
            <ErrorMessage name="paymentOption" />

            <div className="eachField3">
              <Field
                fullWidth
                id="cardHolder"
                name="cardHolder"
                label="Card Holder Name"
                as={TextField}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="cardHolder" />
              </span>
            </div>

            <div style={{ display: "flex" }} className="eachField3">
              <Field
                className="customeField"
                fullWidth
                id="cardNumber"
                name="cardNumber"
                type="number"
                label="Card Number"
                as={TextField}
              />
              <Field
                className="customeField"
                //
                id="cvc"
                name="cvc"
                label="CVC"
                type="number"
                as={TextField}
              />
            </div>
            <span style={{ color: "red" }}>
              <ErrorMessage name="cardNumber" />
            </span>
            <span style={{ color: "red", float: "right" }}>
              <ErrorMessage name="cvc" />
            </span>
          </div>
          <div className="bottomButtons">
            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleBack}
              // style={{ margin: "15px 5px" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="nextBtn"
            >
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Form1;
