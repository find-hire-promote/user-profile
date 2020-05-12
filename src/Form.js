import React from 'react'
import TextField from '@material-ui/core/TextField'
import { BehaviorsExhitbited } from './behaviors-exhibited'
import { Accomplishments } from './accomplishments'
import { AddButton } from './add-button'

const WorkExperience = () => {
  return (
    <fieldset style={{ borderWidth: 0, margin: '24px 0' }}>
      <legend>{'Work Experience'}</legend>
      <TextField
        label="Title"
        defaultValue=""
        fullWidth
        helperText={
          'eg: "Software Engineer level 1", "Junior Marketer", "Senior VP of B2B"'
        }
      />
      <TextField
        style={{ marginTop: 16 }}
        label="Role"
        defaultValue=""
        fullWidth
        multiline
        rows={4}
        variant={'outlined'}
        helperText={
          'Responsabilities, day to day, what did you make sure happened?'
        }
      />
      <BehaviorsExhitbited />
      <Accomplishments />
    </fieldset>
  )
}

const Form = () => {
  const [workExperienceSections, setWorkExperienceSections] = React.useState([])
  const addWES = () =>
    setWorkExperienceSections(workExperienceSections.concat(<WorkExperience />))

  return (
    <form style={{ padding: '0 24px', marginBottom: '64px' }}>
      <fieldset style={{ borderWidth: 0 }}>
        <legend>{'Personal Information'}</legend>
        <TextField
          id="name"
          label="Full Name"
          defaultValue=""
          fullWidth
          helperText="(will not be visible to companies)"
        />
      </fieldset>
      {workExperienceSections.map(i => i)}
      <AddButton onClick={addWES} label={'Add Work Experience'} />
    </form>
  )
}

export default Form
