import { FunctionComponent } from 'react';
import './globals.css';

const RootLayout: FunctionComponent = ({ children }) => (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout