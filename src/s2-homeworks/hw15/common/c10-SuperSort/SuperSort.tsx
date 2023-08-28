import React from 'react'
import {IconButton, TableCell} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";

// добавить в проект иконки и импортировать
const downIcon ="🔽"
const upIcon = '🔼'
const noneIcon = '🔷'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string): string => {
    console.log('sort', sort, down, up)
    if (sort === '') {
        return  down
    } else if (sort === down) {
        return up
    }
    else if (sort===up){
        return ''
    }
    else {
         return down;
    }
}
const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    //const sorted = pureChange(sort,up,down)

    const onChangeCallback = () => {

        onChange(  pureChange(sort,down,up) )
    }

    const icon = sort === up
        ? downIcon
        : sort === down
            ? noneIcon
            : upIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {icon}

        </span>
    )
}

export default SuperSort
