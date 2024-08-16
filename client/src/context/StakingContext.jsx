import { createContext, useState } from "react";
import PropTypes from 'prop-types'; 
const StakingContext = createContext();

export const StakingProvider = ({ children }) => {
    const [isReload, setIsReload] = useState(false);

    return (
        <StakingContext.Provider value={{ isReload, setIsReload }}>
            {children}
        </StakingContext.Provider>
    );
};

StakingProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default StakingContext;
