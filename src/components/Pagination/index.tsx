import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import './style.scss'
import { MuiThemeProvider } from '@material-ui/core'
import { createTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  button: {
    '& .Mui-selected': {
      backgroundColor: '#FFFFFF',
      boxShadow: '0 0 16px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08)',
      borderRadius: 6,
    },
    '& .Mui-selected:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
}))

export const PaginationComponent = (props) => {
  const theme = createTheme({
    props: {
      // Name of the component
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
  })

  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <div className='pagination-container'>
        <div className='pagination-container__item-count'>
          <span>{`Всего: ${props?.totalElements || ''}`}</span>
        </div>
        <Pagination
          onChange={props?.onChange}
          page={props?.defaultPage + 1}
          count={props?.totalPages || 0}
          classes={{ ul: classes.button }}
          shape='rounded'
        />
        <div className='pagination-settings-container'>
          <span className='pagination-settings-container__text'>Показывать по: </span>
          <div className='button-container row-count_select'>
            {props?.rowCount ? (
              props?.rowCount?.map((count) => (
                <span key={count.id}>
                  <input
                    type='radio'
                    id={`${count.id}`}
                    name='pageSize'
                    value={count.value}
                    checked={count.active}
                    onChange={() => props?.setRowCountOnPage(count.value)}
                  />
                  <label
                    className={count.active ? 'button-container__button active_count' : 'button-container__button'}
                    htmlFor={`${count.id}`}
                  >
                    {count.value}
                  </label>
                </span>
              ))
            ) : (
              <div className='button-container row-count_select'>
                <span key={10}>
                  <input
                    type='radio'
                    id={`${10}`}
                    name='pageSize'
                    value={10}
                    checked
                    // onChange={}
                  />
                  <label className='button-container__button active_count' htmlFor={`${10}`}>
                    {10}
                  </label>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  )
}
