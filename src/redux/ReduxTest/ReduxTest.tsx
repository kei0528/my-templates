import { useDispatch, useSelector } from 'react-redux';
import { AppState, setBar } from '../redux-basic-setup';

export const ReduxTest = () => {
  const dispatch = useDispatch();
  const barState = useSelector<AppState>(state => state.baz.bar) as string;

  return (
    <>
      <h1 data-testid='display'>{barState}</h1>
      <input data-testid='input' onChange={e => dispatch(setBar(e.target.value))}></input>
    </>
  );
};
