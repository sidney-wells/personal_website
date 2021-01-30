// import Head from 'next/head';
// import styles from '../../styles/Home.module.css';
import { Text } from '../components';

const Index = () => {
  const intro = {
    textAlign: 'center',
    fontSize: 54,
    opacity: '1',
    transition: 'opacity 5s',
  };

  return (
    <div>
      <Text label="Sidney Wells" sx={intro} />
    </div>
  );
};

export default Index;
