import "./form-input.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={otherProps.id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
