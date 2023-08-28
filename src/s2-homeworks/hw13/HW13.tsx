import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import {Container, Grid, Paper} from "@mui/material";

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
    const [code, setCode] = useState('')
    const [text, setText] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [disable, setDisable] = useState(false)

    const send = (x?: boolean | null) => () => {
        const url =
            x === null
                ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
                : 'https://samurai.it-incubator.io/api/3.0/homework/test'

        setCode('')
        setImage('')
        setText('')
        setInfo('...loading')
        setDisable(true)

        axios
            .post(url, {success: x})
            .then((res) => {
                setCode('Код 200!')
                setImage(success200)
                setText(res.data.errorText)
                setInfo(res.data.info)
                setDisable(false)


            })
            .catch((e) => {

                if (e.response.status === 400 || e.response.status === 500) {

                    setCode(`Код ${e.response.status}!`)
                    setImage(e.response.status === 400 ? error400 : error500)
                    setText(e.response.data.errorText)
                    setInfo(e.response.data.info)
                    setDisable(false)

                } else {
                    setText(e.name)
                    setInfo(e.message)
                    setImage(errorUnknown)
                    setDisable(false)
                }
            })

    }

    return (





                <div id={'hw13'}>


                    <div className={s2.container}>
                        <h3 >Homework #13</h3>
                        <div className={s.buttonsContainer}>
                            <SuperButton
                                id={'hw13-send-true'}
                                onClick={send(true)}
                                xType={'secondary'}
                                disabled={disable}

                            >
                                Send true
                            </SuperButton>
                            <SuperButton
                                id={'hw13-send-false'}
                                onClick={send(false)}
                                xType={'secondary'}
                                disabled={disable}

                            >
                                Send false
                            </SuperButton>
                            <SuperButton
                                id={'hw13-send-undefined'}
                                onClick={send(undefined)}
                                xType={'secondary'}
                                disabled={disable}

                            >
                                Send undefined
                            </SuperButton>
                            <SuperButton
                                id={'hw13-send-null'}
                                onClick={send(null)} // имитация запроса на не корректный адрес
                                xType={'secondary'}
                                disabled={disable}

                            >
                                Send null
                            </SuperButton>
                        </div>

                        <div className={s.responseContainer}>
                            <div className={s.imageContainer}>
                                {image && <img src={image} className={s.image} alt="status"/>}
                            </div>

                            <div className={s.textContainer}>
                                <div id={'hw13-code'} className={s.code}>
                                    {code}
                                </div>
                                <div id={'hw13-text'} className={s.text}>
                                    {text}
                                </div>
                                <div id={'hw13-info'} className={s.info}>
                                    {info}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default HW13