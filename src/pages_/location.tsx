import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';
import TextContent from '../components/commons/sectionText';
import data from './api/data';

const Components = (): NextPage => {
  const content = data.locations;
  return (
    <MainLayout footer={true} bar={false}>
      <TextContent content={content} />
    </MainLayout>
  );
};

export default Components;
