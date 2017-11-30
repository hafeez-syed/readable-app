import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {TiHome} from 'react-icons/lib/ti';

const Home = (props) => {
	const pathName = props.location.pathname;
	return (
		<div className="home">
			<div className='sorting-logo' title='Home'>
				{pathName === '/' ?
					<TiHome className="link-inactive" size={40} />
					:			
					<Link to='/' >
						<TiHome size={40} />
					</Link>
				}
			</div>
		</div>
	)
};

export default withRouter(Home);
