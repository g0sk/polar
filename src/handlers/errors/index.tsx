import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import {ErrorFallback} from './ErrorFallback';

setJSExceptionHandler((error, isFatal) => {
	console.warn(error, isFatal);
});

//Generic handler
const errorHandler = (error: Error) => {
	console.error(error);
};

export const ErrorHandler = ({children}: {children: React.ReactNode}) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
			{children}
		</ErrorBoundary>
	);
};
