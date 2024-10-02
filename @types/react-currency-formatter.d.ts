declare module 'react-currency-formatter' {
  interface CurrencyFormatterProps {
    quantity: number;
    currency?: string;
    locale?: string;
    pattern?: string;
    symbol?: boolean;
  }

  const CurrencyFormatter: React.FC<CurrencyFormatterProps>;
  export default CurrencyFormatter;
}
