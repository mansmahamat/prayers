import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './utils/Backgound';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

import './translations/i18n';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback="Loading...">
        <ThemeProvider initialTheme="">
          <Background>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Background>
        </ThemeProvider>
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
