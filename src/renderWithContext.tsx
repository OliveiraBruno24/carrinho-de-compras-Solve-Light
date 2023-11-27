import { render } from '@testing-library/react';
import { createContext } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithContext = (
    component: JSX.Element,
    {
      initialValue,
      Context = createContext(initialValue),
      route ='/'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }: any,
  ) => (
    window.history.pushState({}, '', route),
    {
      ...render(
        <Context.Provider value={initialValue}>
          <MemoryRouter>{component}</MemoryRouter>
        </Context.Provider>,
      ),
      Context,    
    }
  );
  

