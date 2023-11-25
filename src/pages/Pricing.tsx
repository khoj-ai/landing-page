import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="core-page">
        <div className="navLogo">
            <Link to="/">
                <img className='khoj-logo' src="/khoj-logo-sideways-500.png" alt="Khoj" />
            </Link>
        </div>
        <div className='content-sections'>
            <div>
                <h1 className='article-title' >Pricing</h1>
                <div className='card-options'>
                    <div className='card-option free'>
                        <h2 className='card-title'>Human ($0/mo)</h2>
                        <div className='card-content'>
                            <ul className='card-content'>
                                <li className='card-content'>Text-based AI chat</li>
                                <li className='card-content'>Up to 10 MB of data storage</li>
                                <li className='card-content'>5 queries per day</li>
                            </ul>
                        </div>
                        <div className='cta'>
							<Button
								type="default"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', fontSize: 'x-large', height: '50px' }}
								href="https://app.khoj.dev">
									Get Started
								</Button>
						</div>
                    </div>
                    <div className='card-option premium'>
                        <h2 className='card-title'>Futurist (<del>$50</del> $30/mo)</h2>
                        <div className='card-content notice'>Early-Bird deal!</div>
                        <div className='card-content'>
                            <ul className='card-content'>
                                <li className='card-content'>Multi-modal (voice, image), internet-enabled AI chat</li>
                                <li className='card-content'>Early access to new features</li>
                                <li className='card-content'>Up to 100 MB of data storage</li>
                                <li className='card-content'>Unlimited queries per day</li>
                            </ul>
                        </div>
                        <div className='cta'>
							<Button
								type="primary"
								size='large'
								className='cta-button'
								style={{borderRadius: '4px', fontSize: 'x-large', height: '50px' }}
								href="https://buy.stripe.com/28ocQb7kb4iD0cEdQQ">
									Level Up
								</Button>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;