import React from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

function BadgeTag() {
  return (
    <div>
    <ToggleButtonGroup type="checkbox">
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  )
}

export default BadgeTag