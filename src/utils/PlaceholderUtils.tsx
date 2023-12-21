import {useData} from "../personalDataPage/DataContext";
import React, {useState} from "react";
import {useConnectionButton} from "../homepage/ConnectionButton";
import {useNavigate} from "react-router-dom";
import {UserData} from "../interface/UserData";


export const usePlaceholderConnect = () => {
    const { data, setData, userAddedData, setUserAddedData } = useData();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [tableVisible, setTableVisible] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { account } = useConnectionButton();

    const handleNameChange = (event: { target: { value: React.SetStateAction<string> }; }) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string> }; }) => {
        setEmail(event.target.value);
    };

    const fetchData = async (page: number, perPage: number) => {
        try {
            setLoading(true);

            const response = await fetch(`https://new-backend.unistory.app/api/data?page=${page}&perPage=${perPage}`);

            const result: { items: UserData[] } = await response.json();
            setData(result.items);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const navigate = useNavigate();

    const handleRowClick = (id: number) => {
        const selectedUser = data.find((item) => item.id === id);

        if (selectedUser) {

            navigate(`/personal-data/${id}`);
        }
    };
    const handleButtonClick = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setButtonDisabled(true);

        const newData: UserData = {
            id: data.length + 1,
            username: name,
            email: email,
            address: account,
            userAdded: true,
        };

        await fetchData(1, 50);


        setData((prevData) => [
            newData,
            ...prevData,
        ]);

        setUserAddedData((prevUserAddedData) => [newData, ...prevUserAddedData]);

        setName(name);
        setEmail(email);
        setTableVisible(true);
        setButtonDisabled(true);
    };

    const handleDelete = (id: number) => {
        const isUserAdded = userAddedData.some((item) => item.address === account);

        if (isUserAdded) {
            const updatedUserAddedData = userAddedData.filter((item) => item.address !== account);
            setUserAddedData(updatedUserAddedData);
        }

        const updatedData = data.filter((item) => item.address !== account);
        setData(updatedData);
        setButtonDisabled(false);
    };

    return {
        data,
        setData,
        userAddedData,
        setUserAddedData,
        name,
        email,
        loading,
        handleEmailChange,
        handleDelete,
        handleButtonClick,
        handleRowClick,
        tableVisible,
        buttonDisabled,
        account,
        handleNameChange,
    };

}