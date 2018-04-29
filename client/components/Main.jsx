
import React from 'react';
import {Link} from 'react-router-dom';


export class Main extends React.Component {
    render() {
        return (
            <div>
				<h1>
					<Link to="/">Da Xia Gu</Link>
				</h1>
				{React.cloneElement(this.props.children,this.props)}
 			</div>
        )
    }
}


export default Main;
