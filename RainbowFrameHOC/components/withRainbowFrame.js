import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {
        return props => {
            let z = <Component {...props} />;
            colors.forEach(color => {
                z = <div style={{border: "solid 3px " + color, padding: "5px"}}>{z}</div>
            });
            return z;
        }
    };
}

export default withRainbowFrame;