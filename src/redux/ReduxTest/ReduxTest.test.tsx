import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import makeStore from '../redux-basic-setup';
import { ReduxTest } from './ReduxTest';

describe('ReduxTest', () => {
  it('should update redux baz state', () => {
    render(
      <Provider store={makeStore()}>
        <ReduxTest />
      </Provider>
    );

    const inputElm = screen.getByTestId('input');
    fireEvent.change(inputElm, { target: { value: 'new value' } });

    const displayElm = screen.getByTestId('display');
    expect(displayElm).toHaveTextContent('new value');
  });
});
