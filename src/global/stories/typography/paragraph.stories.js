import React from 'react'

export default {
  title: 'Global/Typography/Paragraph'
}

const ParagraphStory = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum
        laborum minus facilis deserunt repudiandae debitis, officia commodi
        omnis! Animi commodi excepturi blanditiis dicta facere minus quasi fugit
        maxime atque?
      </p>
    </>
  )
}

const ParagraphTemplate = (args) => <ParagraphStory {...args} />

export const Paragraph = ParagraphTemplate.bind({})
