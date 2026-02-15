import React from 'react';

const useActive = () => {

    const [active, setActive] = React.useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return { active, toggleActive };
}

export default useActive