import React from 'react';
import {useParams} from "react-router-dom";
import { useData } from './DataContext';
import Header from "../homepage/Header";
import "./PersonalData.css"
import {texts} from "../texts/texts";


function PersonalData() {

    const { id } = useParams();
    const { data } = useData();
    const user = data.find((item) => item.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <React.Fragment>
            <Header/>
            <div className='info_image'>
                <div className='personalData_main'>
                    <h1> {texts.personalData}</h1>


                    <div className='div_with_data'>
                        <p className='text_info'>{texts.name}</p>
                        <p className='data_info'>{user.username}</p>
                    </div>

                    <div className='div_with_data'>
                        <p className='text_info'>{texts.email}</p>
                        <p className='data_info'>{user.email}</p>
                    </div>

                    <div className='div_with_data'>
                        <p className='text_info'>{texts.wallet}</p>
                        <p className='data_info'>{user.address}</p>
                    </div>
                </div>

                <div className='data_elipse5'/>
                <div className='data_elipse4'/>
                <div className='data_elipse'/>
                <div className='data_elipse2'/>
                <div className='data_elipse3'/>
                <img className='data_elipse6' src={'../elipse6.svg'} alt='elipse6'/>
                <img className='dot' src={'../dot.svg'} alt='dot'/>
                <img className='planet_image' src={'../planetNoText.svg'} alt='planet'/>
            </div>

        </React.Fragment>
    );
}


export default PersonalData;
