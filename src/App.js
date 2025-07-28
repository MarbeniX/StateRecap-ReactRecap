import { useState } from "react";
import Button from "./Components/Button";
import "./index.css";
import StepMessage from "./Components/StepMessage";

const messages = [
    "Welcome to the first step!",
    "You are now on the second step.",
    "Congratulations, you have completed all steps!",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(true);

    function handleNext() {
        setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    }
    function handlePrevious() {
        setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    }

    return (
        <>
            <button className="close" onClick={() => setOpen((is) => !is)}>
                x
            </button>
            {open && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <StepMessage step={step}>{messages[step - 1]}</StepMessage>

                    <div className="buttons">
                        <Button
                            bgColor="#7950F2"
                            txtColor="#fff"
                            onClick={handlePrevious}
                        >
                            <span>Previous</span>
                        </Button>

                        <Button
                            bgColor="#7950f2"
                            txtColor="#fff"
                            onClick={handleNext}
                        >
                            <span>Next</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
