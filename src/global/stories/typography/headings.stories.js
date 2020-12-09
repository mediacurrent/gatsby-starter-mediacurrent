import React from 'react'

export default {
  title: 'Global/Typography/Headings'
}

const HeadingsStory = () => {
  return (
    <>
      <h1>Heading 1</h1>
      <h2>Heading 1</h2>
      <h3>Heading 1</h3>
      <h4>Heading 1</h4>
      <h5>Heading 1</h5>
      <h6>Heading 1</h6>
    </>
  )
}

const HeadingTemplate = (args) => <HeadingsStory {...args} />

export const Headings = HeadingTemplate.bind({})
