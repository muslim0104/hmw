import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {CircularProgress} from "@mui/material";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useSelector<AppStoreType,boolean>(state => state.loading.isLoading)
     const dispatch=useDispatch()
    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд

        dispatch(loadingAC(true))
        setTimeout(()=>{
             dispatch(loadingAC(false))
        },1500)
    }

    return (
        <div id={'hw10'}>


            <div className={s2.container}>
                <h3 >Homework #10</h3>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        < CircularProgress/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
