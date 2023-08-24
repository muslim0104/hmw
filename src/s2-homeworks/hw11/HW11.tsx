import React, {ChangeEvent, useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState, saveState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {

    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    function HW11() {
        const [value1, setValue1] = useState<number>(restoreState<number>('hw11-value1', 0));
        const [value2, setValue2] = useState<number>(restoreState<number>('hw11-value2', 100));

        const change = (value: string, newValue: number | number[]) => {
            if (value === 'hw11-value1') {
                saveState('hw11-value1', newValue);
                setValue1(newValue as number); // Преобразуйте значение к числу, если оно массив
            }

            if (value === 'hw11-value2') {
                saveState('hw11-value2', newValue);
                setValue2(newValue as number); // Преобразуйте значение к числу, если оно массив
            }
        }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div >
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            onChange={(newValue)=> change('hw11-value1',newValue)}


                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChange={(newValues) => {
                                change('hw11-value1', newValues[0]);
                                change('hw11-value2', newValues[1]);
                            }}

                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
