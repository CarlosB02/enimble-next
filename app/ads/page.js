import AdsClient from './AdsClient';

export const metadata = {
  title: 'Anúncios Pagos & Tráfego Pago | Google & Meta Ads',
  description: 'Campanhas de tráfego pago focadas em ROI e conversão no Google Ads, Meta Ads e TikTok Ads.',
  alternates: {
    canonical: '/ads',
  },
};

export default function AdsPage() {
  return <AdsClient />;
}
