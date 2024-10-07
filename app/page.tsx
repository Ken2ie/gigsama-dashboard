import Image from 'next/image'
import Dashboard from './dashboard/dashboard'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import MainPage from './dashboard/pages/main-pages';

config.autoAddCss = false;

export default function Home() {
  return (
    <Dashboard>
      <MainPage></MainPage>
    </Dashboard>
  )
}
