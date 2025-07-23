import { useState } from "react";
import "./index.css";

const messages = [
    "Welcome to the first step!",
    "You are now on the second step.",
    "Congratulations, you have completed all steps!",
];

export default function App() {
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(true);

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

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            style={{ background: "#7950f2", color: "#fff" }}
                            onClick={() =>
                                setStep(step > 1 ? (s) => s - 1 : (s) => s)
                            }
                        >
                            Previous
                        </button>
                        <button
                            style={{ background: "#7950f2", color: "#fff" }}
                            onClick={() =>
                                setStep(step < 3 ? (s) => s + 1 : (s) => s)
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
