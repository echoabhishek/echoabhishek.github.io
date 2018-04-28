import React from 'react';
import ResumeFile from '../static/AbhishekArora-Resume.pdf'
import ContentWrapper from './ContentWrapper';

const Resume = () => (
  <div>
    <ContentWrapper
      title='Resume'>
      <iframe
        style={styles.iframe}
        src={ResumeFile} />
    </ContentWrapper>
  </div>
);

const styles = {
  iframe: {
    width: '100%',
    height: '700px',
    zoom: 0.75,
    fontSize: '150%',
    padding: '0 0 0 0',
    margin: '0 0 0 0',
    marginTop: '30px'
  }
}

export default Resume;
