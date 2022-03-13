import Head from 'next/head';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from '@/layouts/mainLayout';
import PagePiling from '@/components/commons/pagePiling';
import { useState } from 'react';
import HeaderSection from '@/components/commons/sectionTop';
import FooterSection from '@/components/commons/sectionBottom';
import ButtonGroup from '@/components/commons/buttonGroup';
import styles from '@/layouts/styles';

const ComponentTest = (): NextPage => {
  const classes = styles();
  const { t } = useTranslation();
  const [bar, setBar] = useState<boolean>(true);
  const [footer, setFooter] = useState<boolean>(false);
  const afterLoad = (link: unknown, index: number): void => {
    setBar(index === 1);
    setFooter(index === 10);
  };

  return (
    <MainLayout footer={footer} bar={bar}>
      <Head>
        <title>{t('common:site-name')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PagePiling id="test" options={{ afterLoad }}>
        <div className="section">
          <div className={classes.product01Background}>
            <div style={{ marginTop: '10%', textAlign: 'center' }}>
              <HeaderSection />
            </div>
            <div style={{ marginTop: '10%', textAlign: 'center' }}>
              <FooterSection color="white" showIconButton={false} href="/submit" />
            </div>
            <ButtonGroup
              leftButton={{ href: '/submit', name: 'CUSTOM ORDER', backgroundColor: 'orange', color: 'white' }}
              rightButton={{ href: '/submit', name: 'EXISTING INVENTORY', backgroundColor: 'orange', color: 'white' }}
              showIconButton={true}
            />
          </div>
        </div>
      </PagePiling>
    </MainLayout>
  );
};

export default ComponentTest;
