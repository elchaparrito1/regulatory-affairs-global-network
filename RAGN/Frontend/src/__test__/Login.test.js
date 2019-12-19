import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login/Login';
import { Provider } from 'react-redux';
import store from '../store/store';

// test.afterEach(cleanup);

describe('test cases for login', () => {
  const renderComponent = () =>
    render(
      <Provider store={store()}>
        <Login />
      </Provider>
    );

  test('can render with redux with defaults', () => {
    const { getByLabelText } = renderComponent();
    fireEvent.click(getByLabelText(/show or hide password/i));
  });

  test('allows user to login successfully', () => {
    const { getByLabelText } = renderComponent();
    const userType = getByLabelText(/customer/i);
    const email = getByLabelText(/email-input/i);
    const password = getByLabelText(/password-input/i);
    const loginBtn = getByLabelText(/show or hide password/i);

    fireEvent.change(email, { target: { value: 'test@gmail.com' } });
    fireEvent.change(password, { target: { value: 'Test123#' } });
  });
});
