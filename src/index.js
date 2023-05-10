import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // src/index.htmlにid=rootのdivタグある
root.render( //id=rootのdivにレンダリング(あるデータを表示させること)
  <React.StrictMode>
    <App />
    {/* app.jsの内容を表示する */}
  </React.StrictMode>
  // strictモード。厳格なモード。脆弱性発見したらすぐエラーを出す。バグを未然に防げる。基本つけてアプリ開発進める
);


