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
    if (sort === up) {
        return '';
    } else if (sort === down) {
        return up;
    }
    else {
        return down
    }
}
const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {

        onChange(  pureChange(sort,up,down))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

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
