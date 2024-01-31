import clsx from 'clsx';
import styles from './Input.module.scss';

function Input(props) {
    const classes = clsx(styles.input, {
        [styles.default]: props.default,
        [styles.primary]: props.primary,
        [styles.success]: props.success,
        [styles.info]: props.info,
        [styles.warning]: props.warning,
        [styles.danger]: props.danger,
        [styles.disabled]: props.disabled,
        [styles.panel]: props.panel,
        [styles.composer]: props.composer,
        // Add Class Error
        [styles.error]: props.error
    });

    const feedback = clsx(styles.feedback);

    return (
        <>
            {props.label && (<label htmlFor={props.name}>{props.label}</label>)}
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                placeholder={'Enter your ' + props.holder ? props.holder : props.label}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={classes}
                autoFocus={props.autoFocus}
            />
            {props.error && (
                <div className={feedback}>{props.error}</div>
            )}
        </>
    )
}
export default Input;