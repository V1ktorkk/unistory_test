import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserData {
    id: number;
    username: string;
    email: string;
    address: string;
    userAdded: boolean;
}

interface DataContextValue {
    data: UserData[];
    setData: Dispatch<SetStateAction<UserData[]>>;
    userAddedData: UserData[];
    setUserAddedData: Dispatch<SetStateAction<UserData[]>>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<UserData[]>([]);
    const [userAddedData, setUserAddedData] = useState<UserData[]>([]);

    const value: DataContextValue = {
        data,
        setData,
        userAddedData,
        setUserAddedData,
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextValue => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
