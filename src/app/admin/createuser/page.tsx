import Link from 'next/link';

import Trans from '~/core/ui/Trans';
import Heading from '~/core/ui/Heading';
import SignUpMethodsContainer from '~/app/auth/components/SignUpMethodsContainer';

import configuration from '~/configuration';
import { withI18n } from '~/i18n/with-i18n';

const SIGN_IN_PATH = configuration.paths.signIn;

export const metadata = {
  title: 'Create User',
};

function CreateUser() {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%] ">
      <div className="w-[400px] ">
        <div>
          <Heading type={5}>
            <Trans i18nKey={'auth:signUpHeading'} />
          </Heading>
        </div>

        <SignUpMethodsContainer />

        <div className={'flex justify-center text-xs'}>
          {/* <p className={'flex space-x-1'}> */}
          {/* <span>
              <Trans i18nKey={'auth:alreadyHaveAnAccount'} />
            </span> */}

          {/* <Link
              className={'text-primary-800 hover:underline dark:text-primary'}
              href={SIGN_IN_PATH}
            >
              <Trans i18nKey={'auth:signIn'} />
            </Link> */}
          {/* </p> */}
        </div>
      </div>
    </div>
  );
}

export default withI18n(CreateUser);
