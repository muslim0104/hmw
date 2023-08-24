import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount/itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {
        onChange(page,itemsCountForPage)

    }

    const onChangeSelect = (event: any) => {
        onChange(page,event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент



                    '& .MuiPaginationItem-root': {
                        color: '#333', // Цвет текста элемента
                        fontSize: '16px', // Размер текста
                        fontWeight: 'bold', // Жирность текста
                        margin: '0 4px', // Отступы между элементами
                        transition: 'background-color 0.3s, color 0.3s', // Плавное изменение цветов при наведении
                        '&.Mui-selected': {
                            backgroundColor: '#007bff', // Цвет фона для выбранного элемента
                            color: 'white', // Цвет текста для выбранного элемента
                            '&:hover': {
                                backgroundColor: '#0056b3', // Цвет фона при наведении на выбранный элемент
                            },
                        },
                        '&:hover': {
                            backgroundColor: '#f4f4f4', // Цвет фона при наведении на элемент
                            color: '#007bff', // Цвет текста при наведении на элемент
                        },
                    },

                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
