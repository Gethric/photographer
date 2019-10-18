import React from "react";

import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input className="Form_Input" onChange={handleChange} {...otherProps} />
		{label ? (
			<label
				className={`${
					otherProps.value.length ? "shrink" : ""
				} Form_Input_Label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
