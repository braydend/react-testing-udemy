import React, { Dispatch, SetStateAction } from 'react';

const successContext = React.createContext<(boolean | Dispatch<SetStateAction<boolean>>)[] | undefined>(undefined);

const useSuccess = () => {
    const context = React.useContext(successContext);

    if (!context) {
        throw new Error('useSuccess must be used within an SuccessProvider');
    }

    return context;
};

type SuccessContextProps = {
    value?: (boolean | Dispatch<SetStateAction<boolean>>)[],
};

const SuccessProvider: React.FC<SuccessContextProps> = (props) => {
    const [success, setSuccess] = React.useState(false);

    const value = React.useMemo(() => [success, setSuccess], [success]);

    return (
        <successContext.Provider value={value} {...props} />
    );
};

export default { useSuccess, SuccessProvider };