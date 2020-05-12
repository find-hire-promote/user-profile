import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const categories1 = ['Balanced Thinker', 'Leadership', 'Bias to Action']

export const TitleDescription = ({ categories, titleLabel }) => (
  <div style={{ display: 'flex', width: '100%' }}>
    <Autocomplete
      style={{ width: 185 }}
      className={'TitleDescription-title-autocomplete'}
      id="free-solo-demo"
      freeSolo
      autoComplete
      options={categories || categories1}
      renderInput={params => (
        <TextField
          {...params}
          className={'TitleDescription-title-autocomplete-text'}
          label={titleLabel || ''}
          margin="normal"
          variant="outlined"
          style={{ maxWidth: 185 }}
        />
      )}
    />
    <TextField
      className={'TitleDescription-description'}
      style={{ marginTop: 16, flexGrow: 1 }}
      label="Description"
      defaultValue=""
      multiline
      // fullWidth
      variant={'outlined'}
    />
  </div>
)
