import React from 'react';

export default class Blog extends React.Component {
	render() {
		return <div>
			<div className="row">
				<h1>Blog</h1>
			</div>
			<div>
				<div>
					<div className="two column">Blog Name</div>
				</div>
				<div>
					<div className="nine columns">Blog post</div>
				</div>
			</div>
		</div>
	}
}
