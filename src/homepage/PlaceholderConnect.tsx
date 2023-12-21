import React from 'react';
import './PlaceHolderConnect.css';
import {usePlaceholderConnect} from "../utils/PlaceholderUtils";
import {texts} from "../texts/texts";


function PlaceholderConnect() {
        const {
            data,
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
        } = usePlaceholderConnect();

    return (
        <div className='placeholder_main'>
            <div className='left_part'>
                <p className='registration_text'>{texts.betaTestRegistration} </p>
                <p className='text_under'> {texts.mainText} </p>
            {!buttonDisabled && (
                <div className='undisabled_button_place'>
                    <p className='name_email_fields_en'>{texts.name}</p>
                    <input type="text" placeholder={texts.partitionListInfo} value={name}
                           onChange={handleNameChange}/>
                    <p className='name_email_fields_en'>{texts.email}</p>
                    <input type="email" value={email} onChange={handleEmailChange}/>
                    <button className='button_api' type="button" onClick={handleButtonClick} disabled={buttonDisabled}>
                        {buttonDisabled ? texts.buttonOn : texts.buttonOff}
                    </button>
                </div>
            )}

            {buttonDisabled && (
                <div>
                    <h2>{texts.name}</h2>
                    <p className='name_email_fields_dis'>{name}</p>
                    <h2>{texts.email}</h2>
                    <p className='name_email_fields_dis'>{email}</p>
                    <button className='button_api' type="button" onClick={handleButtonClick} disabled={buttonDisabled}>
                        {buttonDisabled ? texts.buttonOn : texts.buttonOff}
                    </button>
                </div>
            )}
            </div>

            {loading ? (
                <p>{texts.load}</p>
            ) : tableVisible && (
                <div className='right_part'>
                    <h1>{texts.partitionList}</h1>
                    <div>
                        <div className='custom-scrollbar'>
                        <table className='table_api'>
                            <thead>
                            <tr>
                                <th>{texts.name}</th>
                                <th>{texts.email}</th>
                                <th>{texts.wallet}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <td colSpan={4}>
                                <hr/>
                            </td>
                            {data.map((item) => (
                                <React.Fragment key={item.id}>

                                    <tr   className={item.address !== account ? '' : 'deleted-row'}
                                          onClick={item.address === account ? undefined : () => handleRowClick(item.id)}>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td className='user_and_button'>
                                            {item.address}
                                            {item.userAdded && (
                                                <button className='deleteButton' type="button"
                                                        onClick={() => handleDelete(item.id)}>
                                                </button>
                                            )}
                                        </td>

                                    </tr>
                                    <tr>
                                    <td colSpan={4}>
                                    <hr/>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                        </div>
                </div>
                </div>
            )}
        </div>
    );
}

export default PlaceholderConnect;