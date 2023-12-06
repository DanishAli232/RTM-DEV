import { useContext } from 'react';
import UserSessionContext from '~/core/session/contexts/user-session';

export default function useUserSession() {
  // const { userSession } = useContext(UserSessionContext);
  const storedData = localStorage.getItem('RTM_DEV');

  if (storedData !== null) {
    return JSON.parse(storedData);
  } else {
    return false;
  }


}
