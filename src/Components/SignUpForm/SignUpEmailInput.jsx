import React, {useEffect} from 'react'
import {useState} from 'react'

const SignUpEmailInput = ({sendButtonState, setSendButtonState}) => {
	const [state, setState] = useState('')
	const [pClass, setPClass] = useState('incorrect')

	useEffect(() => {
		if(state === 'correct')
			setSendButtonState({...sendButtonState, email: true})
		else
			setSendButtonState({...sendButtonState, email: false})
	}, [state])

	const onEmailInput = (e) => {
		let input = e.target
	
		if (input.value.match(/\S@\S+\.\S+/i)) { setState('correct'); setPClass('correct') }
		else { setState('input correct email'); setPClass('incorrect') }

		if(input.value === '') setState('')
	}

	return (
		<div className='inputPlaceholder'>
			<input
				className='input'
				type='text'
				placeholder='Email'
				onInput={onEmailInput}
			/>
			<p className={pClass}>{state}</p>
		</div>
	)
}

export default SignUpEmailInput
