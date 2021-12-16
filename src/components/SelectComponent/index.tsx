/* eslint-disable */
import React from 'react'
import { createStyles, makeStyles, MenuItem, Select, Theme } from '@material-ui/core'
import { listenerCount } from 'process'
import icon from '@icons/arrow-small.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minWidth: '200px',
      hight: '40px',
      padding: '10px 20px',
      color: ' #4B5B75',
      fontFamily: 'inherit',
      background: 'transparent',
      border: '1px solid #8ACFE7',
      borderRadius: '130px',
      '&:hover': {
        backgroundColor: '#F6FAFF',
        borderRadius: '130px',
      },
      '&$selected': {
        backgroundColor: '#F6FAFF',
        borderRadius: '130px',
      },
      '&:focus': {
        backgroundColor: '#F6FAFF',
        borderRadius: '130px',
      },
    },
    list: {
      backgroundColor: '#FFF',
      fontSize: '14px',
      color: '#4B5B75',
      '& li': {
        backgroundColor: '#FFF',
        color: '#4B5B75',
      },
      '& li:hover': {
        backgroundColor: '#FFF',
        color: '#7D9DFF',
      },
      '& li.Mui-selected': {
        backgroundColor: '#FFF',
        color: '#7D9DFF',
      },
      '& li.Mui-selected:hover': {
        backgroundColor: '#FFF',
        color: '#7D9DFF',
      },
    },
    icon: {
      transform: 'rotate(-90deg)',
      position: 'absolute',
      right: '20px',
      top: '16px',
    },
    iconOpen: {
      transform: 'rotate(90deg)',
    },
    select: {
      backgroundColor: '#F6FAFF;',
      borderRadius: '130px',
      '&:hover': {
        backgroundColor: '#F6FAFF;',
        borderRadius: '130px',
      },
      '&:focus': {
        backgroundColor: '#F6FAFF;',
        borderRadius: '130px',
      },
    },
    dropdownStyle: {
      backgroundColor: '#FFF',
      color: '#7D9DFF',
      borderRadius: '20px',
      marginTop: '8px',
      boxShadow: '0px 2px 10px rgba(0, 26, 67, 0.1)',
    },
  }),
)

export const SelectComponent = (props) => {
  const [age, setAge] = React.useState(props.value1)
  const classes = useStyles()
  const handleChange = (event) => {
    setAge(event.target.value)
    props.setValueSelect(event.target.value)
  }
  const iconComponent = ({ className }) => {
    className = className.replace('MuiSelect-iconOpen', '')
    return <img src={icon} className={className} />
  }
  return (
    <Select
      IconComponent={iconComponent}
      inputProps={{
        classes: {
          icon: classes.icon,
          iconOpen: classes.iconOpen,
          root: classes.root,
          select: classes.select,
        },
      }}
      value={age}
      onChange={handleChange}
      disableUnderline
      MenuProps={{
        classes: { paper: classes.dropdownStyle, list: classes.list },
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      defaultValue={age}
    >
      <MenuItem value={props.value1} className={classes.list} selected>
        {props.value1}
      </MenuItem>
      <MenuItem value={props.value2} className={classes.list}>
        {props.value2}
      </MenuItem>
      <MenuItem value={props.value3} className={classes.list}>
        {props.value3}
      </MenuItem>
      <MenuItem value={props.value4} className={classes.list}>
        {props.value4}
      </MenuItem>
    </Select>
  )
}
