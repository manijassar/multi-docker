import React from 'react';
import { Link } from 'react-router-dom';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
	return (
		<div>
			Im some other page!
			<Link to="/">Go back home</Link>
		</div>
	);
};

