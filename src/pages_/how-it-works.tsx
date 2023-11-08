import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import useTranslation from 'next-translate/useTranslation';
import Box from '@mui/material/Box';

const Components = (): NextPage => {
  const html = '<p>How it works</p>';
  const { t } = useTranslation();
  return (
    <MainLayout footer={true} bar={true}>
      <Head>
        <title>{t('common:site-name')}</title>
        <link rel="icon" href="/lock.ico" />
      </Head>

      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />;
      </Box>
    </MainLayout>
  );
};

export default Components;
