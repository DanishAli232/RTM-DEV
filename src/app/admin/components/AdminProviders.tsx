'use client';

import I18nProvider from '~/i18n/I18nProvider';
import { notFound } from 'next/navigation';
import CsrfTokenContext from '~/lib/contexts/csrf';
import Toaster from '~/components/Toaster';
import { useEffect } from 'react';
import useUserSession from '~/core/hooks/use-user-session';
import { useRouter } from 'next/navigation';

function AdminProviders(
  props: React.PropsWithChildren<{
    csrfToken: string | null;
    language: string | undefined;
  }>,
) {
  const router = useRouter();
  useEffect(() => {
    const getAuthUser = async () => {
      const storedData = localStorage.getItem('RTM_DEV');

      if (storedData !== null) {
        let data = JSON.parse(storedData);

        if (data.app_metadata.role === 'super-admin') {
          return true;
        } else {
          router.replace('/adminpage');
        }
      } else {
        router.replace('/adminpage');
      }
    };

    const fetchData = async () => {
      const result = await getAuthUser();
    };

    fetchData();
  }, []);

  return (
    <I18nProvider lang={props.language}>
      <CsrfTokenContext.Provider value={props.csrfToken}>
        <Toaster />

        {props.children}
      </CsrfTokenContext.Provider>
    </I18nProvider>
  );
}

export default AdminProviders;
