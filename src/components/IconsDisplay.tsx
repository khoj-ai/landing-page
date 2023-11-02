import React from 'react';

export default function IconDisplay() {
  const icons = [
    'https://khoj-web-bucket.s3.amazonaws.com/github.svg',
    'https://khoj-web-bucket.s3.amazonaws.com/markdown.svg',
    'https://khoj-web-bucket.s3.amazonaws.com/notion.svg',
    'https://khoj-web-bucket.s3.amazonaws.com/org.svg',
    'https://khoj-web-bucket.s3.amazonaws.com/pdf-svgrepo-com.svg',
    'https://khoj-web-bucket.s3.amazonaws.com/plaintext.svg',
  ];

  return (
    <div className="icon-display">
      {icons.map((icon, index) => (
        <img className='example-icon' key={index} src={icon} alt={`Icon ${index}`} />
      ))}
    </div>
  );
}