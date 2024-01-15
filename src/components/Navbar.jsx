import React from 'react';

// CLASS COMPONENT EXAMPLE
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>NAVBAR</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    };
}

export default Navbar;