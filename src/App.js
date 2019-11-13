import React from 'react';
import githubLogo from './../src/GitHub-Mark-64px.png';
import './App.css';

import Main from './Components/Main';

function App() {
	return (
		<div className="container">
			<div className="d-flex justify-content-between align-items-center" style={{width: "215px", position: 'absolute', top: "20px", right: "45px"}}>
				<a className="github-button" href="https://github.com/devsrv/react-easy-animate" data-icon="octicon-star" aria-label="Star devsrv/react-easy-animate on GitHub">Star</a>
				<a href="https://github.com/devsrv/react-easy-animate" className="text-muted">
					<img src={githubLogo} width={35} alt="github" /> View on GitHub
				</a>
			</div>
			
			<Main />
		</div>
	);
}

export default App;
