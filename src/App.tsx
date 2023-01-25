/* eslint-disable no-console */
import './App.css'
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Home } from './pages/Home';

interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

const UnhandledError: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const errorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
  console.log("TODO: Log the error to an error logging client");
  console.log(error);
  console.log(info);
};

export const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={UnhandledError}  onError={errorHandler}>
      <Home />
      </ErrorBoundary>
  )
};
