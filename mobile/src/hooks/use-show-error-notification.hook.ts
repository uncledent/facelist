import { useEffect } from 'react';

/*
  This hook automatically shows an error message if error string is provided
*/
export function useShowErrorNotification(errorMessage?: string) {
  const showErrorMessage = () => {
    if (errorMessage) {
      alert(errorMessage);
    }
  };

  useEffect(showErrorMessage, [errorMessage]);
}
