import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        //we want full control of what submit do, so take out default option
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            //then clear out the fields in the state
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        //pull out the value and name of from event.target(what is going into the form)
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    {/**required is a HTML attribute */}
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <div className='button'>
                        {/**type='submit' will trigger onSubmit method on the form */}
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;