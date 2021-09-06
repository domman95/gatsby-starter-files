import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import GlobalStyle from '../styles/GlobalStyles';
import 'normalize.css';

export default function HomePage() {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <h1>Home Page</h1>
    </>
  );
}
