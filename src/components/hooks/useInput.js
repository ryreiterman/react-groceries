import { useState } from 'react';

const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: evt => {
				setValue(evt.target.value);
			}
		}
	};
};

export default useInput;
