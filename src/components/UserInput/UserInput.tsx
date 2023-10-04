import React, { useState } from "react";

const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
};

const defaultInitialValues = {
    "current-savings": 1000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
};

const UserInput = () => {
    const [formValues, setFormValues] = useState(defaultInitialValues);

    const inputChangeHandler = (input, value) => {
        console.log(input, value);
        setFormValues((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
    };

    const resetHandler = () => {
        setFormValues(defaultInitialValues);
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        value={formValues["current-savings"]}
                        onChange={(event) =>
                            inputChangeHandler(
                                event.target.id,
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        value={formValues["yearly-contribution"]}
                        onChange={(event) =>
                            inputChangeHandler(
                                event.target.id,
                                event.target.value
                            )
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        value={formValues["expected-return"]}
                        onChange={(event) =>
                            inputChangeHandler(
                                event.target.id,
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        value={formValues["duration"]}
                        onChange={(event) =>
                            inputChangeHandler(
                                event.target.id,
                                event.target.value
                            )
                        }
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetHandler}
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
