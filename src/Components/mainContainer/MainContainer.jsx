import React from 'react'
import ContentContainer from './ContentContainer';
import Sidebar from './Sidebar';

const MainContainer = () => {
    return (
      <main className="main-container">
        <Sidebar />
        <ContentContainer />
      </main>
    );
}

export default MainContainer
