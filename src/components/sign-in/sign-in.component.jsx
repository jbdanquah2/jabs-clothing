import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'jb@gmail.com',
            password: 'khjkjk'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        required />
                    <FormInput
                        handleChange={this.handleChange}
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn