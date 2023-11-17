import React from 'react';

import useTranslation from 'next-translate/useTranslation';

const ErrorPage = (): NextPage => {
  const { t } = useTranslation();
  return <p>{t('error-without-status')}</p>;
};

export default ErrorPage;
