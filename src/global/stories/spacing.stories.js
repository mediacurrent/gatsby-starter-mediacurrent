import React from 'react'
import variables from '../utils/_variables.scss'
import colors from '../utils/_colors.scss'
console.log(colors)
console.log(variables)
const Spacing = () => (
  <div style={{ padding: '20px' }}>
    {Object.keys(variables).map((variable) => (
      <>
        <div
          key={variable}
          style={{
            marginBottom: '20px',
            width: '25%'
          }}
        >
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
            ${variable.replace('spacing-', '')}:
          </div>
          <div
            style={{
              display: 'inline-block',
              width: variables[variable],
              height: variables['spacing-space-md'],
              borderRadius: variables['spacing-space-xs'],
              backgroundColor: colors['brand-deep-blue'],
              boxShadow: '1px 1px 1px #ddd'
            }}
          />
          <div>{variables[variable]}</div>
        </div>
      </>
    ))}
  </div>
)
const Template = (args) => <Spacing {...args} />

export const Default = Template.bind({})

export default {
  title: 'Global/Spacing',
  component: Spacing
}
