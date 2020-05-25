import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import Outages from "./../PostProjects/outages"

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title style={{color:'#1D3557'}}>Gemini Portfolio Timeline</Title>
      <Outages/>
    </React.Fragment>
  );
}
