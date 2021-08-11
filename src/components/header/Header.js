import { ThemeProvider, TextField, createTheme, MenuItem } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category';

export default function Header({ category, setCategory, word, setWord }) {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark'
        },
      });

    return (
        <div className="header">
            <span className="title">{word ? word : 'Word Hunt'}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className="search" id="standard-basic" label="Search a word" value={word} onChange={(e) => setWord(e.target.value)} />
                    <TextField
                        className="select"
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map(option => (
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}
