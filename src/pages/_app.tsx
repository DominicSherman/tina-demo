import 'css/global.css';
import { MDXProvider } from '@mdx-js/react';

import { MDXComponents, Meta } from 'components';
import { ToastProvider } from 'react-toast-notifications';

function App({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss placement="bottom-center">
      <Meta />
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ToastProvider>
  );
}

export default App;
