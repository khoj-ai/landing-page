import React from 'react';

export default function IconDisplay() {
  const icons = {
    "github": 'https://khoj-web-bucket.s3.amazonaws.com/github.svg',
    "markdown": 'https://khoj-web-bucket.s3.amazonaws.com/markdown.svg',
    "notion": 'https://khoj-web-bucket.s3.amazonaws.com/notion.svg',
    "org": 'https://khoj-web-bucket.s3.amazonaws.com/org.svg',
    "pdf": 'https://khoj-web-bucket.s3.amazonaws.com/pdf-svgrepo-com.svg',
    "plaintext": 'https://khoj-web-bucket.s3.amazonaws.com/plaintext.svg',
  }

  const LAMP_ICON = "https://khoj-web-bucket.s3.amazonaws.com/lamp-128.png";

  function renderIcons() {
    return (Object.keys(icons) as Array<keyof typeof icons>).map((icon, index) => (
      <img className='example-icon' title={icon} key={index} src={icons[icon]} alt={`Icon ${index}`} />
    ))
  }

  return (
    <div className="icon-display">
      {renderIcons()}
      <img className='example-icon' src={LAMP_ICON} alt='Lamp Icon' />
    </div>
  );
}