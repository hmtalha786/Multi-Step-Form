import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PersonalInformation from "../components/PersonalInformation";
import AccountInformation from "../components/AccountInformation";
import Rivew from "../components/Rivew";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Information", "Account Details", "Review Your Data"];
}

function getStepContent(
  stepIndex: number,
  setStepIndex: React.Dispatch<React.SetStateAction<number>>,
  formValues: {},
  setFormValues: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (stepIndex) {
    case 0:
      return (
        <PersonalInformation
          submit={setStepIndex}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 1:
      return (
        <AccountInformation
          submit={setStepIndex}
          setFormValues={setFormValues}
          prevValues={formValues}
        />
      );
    case 2:
      return <Rivew formValues={formValues} submit={setStepIndex} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep, setActiveStep, formValues, setFormValues)}
    </div>
  );
}
