import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import useTranslation from 'next-translate/useTranslation';
import Box from '@mui/material/Box';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useMediaQuery, Theme, useTheme } from '@mui/material';

const Component = (): NextPage => {
  const { t } = useTranslation();
  const [data, setData] = React.useState('');
  const [warning, setWarning] = React.useState('');

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const width = matches ? '70%' : '60%';

  React.useEffect(() => {
    const secret = process.env.NEXT_PUBLIC_JWT_HOME_PAGE_TOKEN_SECRET;
    const expiresIn = process.env.NEXT_PUBLIC_TOKEN_EXPIRE;
    let token;
    try {
      token = jwt.sign(
        {
          key: 'homePage',
        },
        secret,
        { expiresIn },
      );
    } catch (e) {
      setWarning('Access token error');
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const filter = JSON.stringify({ key: 'about' });
    const url = `${apiUrl}/settings?filter=${filter}`;

    axios({
      url: url,
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setData(response.data[0].description);
      })
      .catch((error) => {
        setWarning('API fetch error');
      });
  }, []);

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
        <Box
          sx={{
            backgroundColor: 'white',
            width: width,
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: data }}
            style={{ paddingLeft: 5, paddingRight: 5, overflow: 'auto' }}
          />
          <div>{warning}</div>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Component;
