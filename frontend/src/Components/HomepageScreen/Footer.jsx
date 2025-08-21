import React from 'react'

function Footer() {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<>
			<div className="wave-container wave">
				<p>© {year}, Developed & Designed by <a className='footer_faizan' target='_blank' rel='noreferrer' href='#'>Mostafa Shariare and his team</a></p>
			</div>
		</>
	)
}

export default Footer