import React from 'react';
import CardList from './Card';
import Form from './Form';
import '../css/styles.scss'

function Home() {
  return (
    <div className="body">
      <div className="app-view">
        <div className="header">
          <h1>
            Card Reader App
        </h1>
        </div>

        <Form />

        <CardList />

      </div>
    </div>
  );
}

export default Home;
