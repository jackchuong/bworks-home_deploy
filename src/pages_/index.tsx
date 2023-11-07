import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import useTranslation from 'next-translate/useTranslation';
import HeaderSection from '@/components/commons/sectionTop';
import ButtonGroup from '@/components/commons/buttonGroup';
import Box from '@mui/material/Box';
import JobChart from '../components/data/pieChart';

import { useMediaQuery, Theme, useTheme } from '@mui/material';

const Components = (): NextPage => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

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
        }}
      >
        <HeaderSection color="black" />

        {!matches && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <JobChart />
          </Box>
        )}

        <ButtonGroup
          leftButton={{
            href: 'https://bworks.app/web/#/postjobs',
            name: 'EMPLOYER',
            backgroundColor: 'orange',
            color: 'white',
          }}
          rightButton={{
            href: 'https://bworks.app/web/#/postjobsjsk',
            name: 'JOB SEEKER',
            backgroundColor: 'orange',
            color: 'white',
          }}
          showIconButton={true}
        />
      </Box>
    </MainLayout>
  );
};

export default Components;
