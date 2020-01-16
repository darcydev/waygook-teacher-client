import React from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

export default function Logout() {
  if (Cookies.get('email')) Cookies.remove('email');
  if (Cookies.get('userID')) {
    Cookies.remove('userID');

    window.location.href = '/';
  }

  return (
    <Page className="page">
      <h3>You've been logged out!</h3>
    </Page>
  );
}

const Page = styled.div``;
