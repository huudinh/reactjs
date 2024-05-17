import { useState, useEffect, useRef } from "react";

const ProgressContentForm = (props) => {
    const { title, note } = props.data;
    const buttonRef = useRef();

    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    // Gửi Form sang API
    useEffect(() => {
        if ((Object.keys(formErrors).length === 0) && isSubmit) {
            buttonRef.current.disabled = true;
            buttonRef.current.classList.add('disable');
            console.log(formValues);
            console.log(props.question);

            setTimeout(() => {
                // Chuyển đến màn hình Thanks
                props.onClick();
            }, 3000);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const regex_phone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

        if (!values.name) {
            errors.name = "Your name is required!";
        }

        if (!values.mobile) {
            errors.mobile = "Mobile is required!";
        } else if (!regex_phone.test(values.mobile)) {
            errors.mobile = "This is not a valid phone format!";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.industry) {
            errors.industry = "Industry is required!";
        }

        return errors;
    };

    return (
        <div className="progressContentBox">
            <div className="progressContentCol">
                <div className="progressContentTitle">{title}</div>
                <div className="progressContentNote">{note}</div>
            </div>
            <div className="progressContentCol">
                <form className="progressContentForm" onSubmit={handleSubmit}>
                    <Input
                        placeholder="Your name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        error={formErrors.name}
                    />
                    <Input
                        placeholder="Mobile number"
                        name="mobile"
                        value={formValues.mobile}
                        onChange={handleChange}
                        error={formErrors.mobile}
                    />
                    <Input
                        placeholder="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        error={formErrors.email}
                    />
                    <Input
                        placeholder="Industry"
                        name="industry"
                        value={formValues.industry}
                        onChange={handleChange}
                        error={formErrors.industry}
                    />
                    <button
                        className="progressBarButton"
                        type="submit"
                        ref={buttonRef} 
                    >
                        Finish
                    </button>
                </form>
            </div>
        </div>
    );
};

// Component Input
const Input = (props) => {
    return (
        <>
            {props.label && <label>{props.label}</label>}

            <input
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                value={props.value || ''}
                onChange={props.onChange}
                className={props.error && 'error'}
            />

            {props.error && <div className="feedback">{props.error}</div>}
        </>
    );
};

export default ProgressContentForm;
