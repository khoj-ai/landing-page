import '../styles/Home.css';

export function Home() {
	return (
		<section className='core-page'>
			<h2 className='title'>Hi! This is Khoj, your personal assistant.</h2>
            <div className='product-description'>
                <p className="product-description">
                    Khoj is designed to be a personal assistant that learns from your own personal data. We believe that too much useful information is locked up in siphoned data siloes with poor ways to access them. With the oncoming information revolution, it's going to be more important than ever to have a way to access your data in a way that's useful to you. Khoj is designed to be that way.
                </p>
                <video controls>
                    <source src="./khoj-osbidian-demo.mp4" type="video/mp4" />
                    Your browser may not support video
                </video>
            </div>
            <div className="fishing-block">
                {/* <img className="fishing-image" src="./fish-rod.png" alt="fish-rod" /> */}
                <p className='fishing-text'>We know how hard it can be to search and engage with information across all the different platforms you use. Our mission is to centralize all your information and make it accessible to you in a private and secure way. We want this technology to be accessible to every person on the planet.</p>
            </div>
		</section>
	);
}

export default Home;