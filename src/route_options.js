import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder="Line"
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleSearchSelection
