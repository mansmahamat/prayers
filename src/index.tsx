import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Background from './utils/Backgound';
import { ThemeProvider } from './context/ThemeContext';
import Toggle from './components/Toggle';
import './translations/i18n';
import Translate from './components/Translate';

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
            <Translate />
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
              <Toggle />
            </div>
            <App />
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
