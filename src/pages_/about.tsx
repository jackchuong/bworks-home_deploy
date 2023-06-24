import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import useTranslation from 'next-translate/useTranslation';
import HeaderSection from '@/components/commons/sectionTop';
import ContentSection from '@/components/commons/sectionVertical';
import ContentSection1 from '@/components/commons/sectionHorizon';
import PagePiling from '@/components/commons/pagePiling';
import { useState } from 'react';
import data from './api/data.ts';
import ButtonGroup from '@/components/commons/buttonGroup';
import TextContent from '../components/commons/sectionText';
import styles from '@/layouts/styles';
import About from '../components/commons/sectionAbout';
import SectionAbout from '../components/commons/sectionAbout';

const Components = (): NextPage => {
  const { t } = useTranslation();

  return (
    <MainLayout footer={true} bar={true}>
      <Head>
        <title>{t('common:site-name')}</title>
        <link rel="icon" href="/lock.ico" />
      </Head>
      <div className="section">
        <div
          style={{
            backgroundImage: 'url(/home.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            paddingTop: '10%',
            paddingBottom: '5%',
            textAlign: 'center',
          }}
        >
          <SectionAbout color="white" />
        </div>
      </div>

      {/* 
        <div className="section">
          <TextContent content={data.product01} />
        </div>
        <div className="section">
          <TextContent content={data.product02} />
        </div>
        <div className="section">
          <TextContent content={data.product03} />
        </div> */}
    </MainLayout>
  );
};

export default Components;
