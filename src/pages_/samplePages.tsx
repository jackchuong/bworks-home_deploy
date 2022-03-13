import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import useTranslation from 'next-translate/useTranslation';
import HeaderSection from '@/components/commons/sectionTop';
import FooterSection from '@/components/commons/sectionBottom';
import ContentSection from '@/components/commons/sectionVertical';
import ContentSection1 from '@/components/commons/sectionHorizon';
import PagePiling from '@/components/commons/pagePiling';
import { useState } from 'react';
import data from './api/data.ts';
import ButtonGroup from '@/components/commons/buttonGroup';
import TextContent from '../components/commons/sectionText';
import styles from '@/layouts/styles';

const Components = (): NextPage => {
  const classes = styles();
  const content = data.general;
  const { t } = useTranslation();
  const [bar, setBar] = useState<boolean>(true);
  const [footer, setFooter] = useState<boolean>(false);
  const afterLoad = (link: unknown, index: number): void => {
    setBar(index === 1);
    setFooter(index === 5);
  };

  return (
    <MainLayout footer={footer} bar={bar}>
      <Head>
        <title>{t('common:site-name')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PagePiling id="components" options={{ afterLoad }}>
        <div className="section">
          <div className={classes.product01Background}>
            <HeaderSection color="white" />
            <ButtonGroup
              leftButton={{ href: '/submit', name: 'CUSTOM ORDER', backgroundColor: 'orange', color: 'white' }}
              rightButton={{ href: '/submit', name: 'EXISTING INVENTORY', backgroundColor: 'orange', color: 'white' }}
              showIconButton={true}
            />
          </div>
        </div>
        <div className="section">
        <div className={classes.product02Background}>
            <HeaderSection color="white" />
            <FooterSection color="white" href="/submit" />
          </div>
        </div>
        <div className="section">
          <ContentSection href="/submit" />
        </div>
        <div className="section">
          <ContentSection1 href="/submit" />
        </div>
        <div className="section">
          <TextContent content={content} />
        </div>
      </PagePiling>
    </MainLayout>
  );
};

export default Components;
