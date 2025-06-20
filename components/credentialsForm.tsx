'use client';

import { useState } from 'react';
import { title } from './primitives';
import { Form, Button, Input } from '@heroui/react';
import { EyeSlashFilledIcon } from '@/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/icons/EyeFilledIcon';
import { signIn } from 'next-auth/react';

export default function CredentialForm() {
  const [isSignUp, setAuthMethod] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();

    if (isSignUp) {
      try {
        await fetch('/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify(formData),
        });

        setFormData({ name: '', email: '', password: '' });
      } catch (error: any) {
        console.log({ error });
      }
    } else {
      try {
        await signIn('credentials', formData);

        setFormData({ email: '', password: '', name: '' });
      } catch (error: any) {
        console.log({ error });
      }
    }
  };

  return (
    <div>
      <h1 className={title()}>Credentials</h1>

      <Form onSubmit={onSubmit} className="w-full max-w-xs flex flex-col gap-4 pt-4">
        {isSignUp && (
          <Input
            isRequired
            onChange={onChange}
            value={formData.name}
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your username"
            type="text"
          />
        )}

        <Input
          isRequired
          onChange={onChange}
          value={formData.email}
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          onChange={onChange}
          value={formData.password}
          label="Password"
          name="password"
          labelPlacement="outside"
          className="max-w-xs"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          placeholder="Enter your password"
          type={isVisible ? 'text' : 'password'}
          variant="bordered"
        />
        <div className="flex gap-2">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
      </Form>
      <div className="pt-4">
        <Button onPress={() => setAuthMethod((val) => !val)}>{`Switch to ${isSignUp ? 'Login' : 'Sign Up'}`}</Button>
      </div>
    </div>
  );
}
