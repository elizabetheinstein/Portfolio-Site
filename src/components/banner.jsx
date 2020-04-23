import React from 'react';
import Image from './image';

const Banner = () => {
	return (
		<div className="banner">
			<div className="container">
				<Image />
				<div className="scroll">
					<span>Scroll Down</span>
				</div>
			</div>
			<div className="fixed-misc">Lizzo</div>
		</div>
	);
};

export default Banner;
