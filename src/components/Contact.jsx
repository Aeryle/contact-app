import React from 'react';

import './Contact.css';

function Contact({avatar, name, status}) {
	return (
		<div className="Contact">
			<img src={avatar} alt="" className="avatar" />
			<div className="status">
				<p className="name">{name}</p>
				<span
					className={`status-${status ? 'online' : 'offline'}`}
				/>
				<p
					className="status-text">{status ? 'online' : 'offline'}</p>
			</div>
		</div>
	);
}

export default Contact;
