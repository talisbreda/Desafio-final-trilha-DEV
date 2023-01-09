import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import './styles.css';

export const Home = () => {
  return (
    <div className='wrapper home-wrapper'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='cards-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
