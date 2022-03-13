import { NextPage } from 'next';
import data from './api/data.ts';

const Component = (props): NextPage => {
  const backgroundColor = props.backgroundColor || 'black';
  const textColor = props.textColor || 'white';
  const content = props.content || '';
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: backgroundColor,

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: textColor,
        textAlign: 'center',
      }}
    >
      <div style={{ width: '40%' }}>{content}</div>
    </div>
  );
};

export default Component;
