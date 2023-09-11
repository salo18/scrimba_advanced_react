import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from './components/Badges/Badge';

function App() {
  return (
    <Badge color='yellow'>
        Shop now
    </Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
