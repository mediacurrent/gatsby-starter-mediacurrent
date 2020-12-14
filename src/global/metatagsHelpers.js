// Build object for spreading in to React Helmet component

// e.g.
// import { getMetaObject } from '../../global/metatags';
// const metaData = getMetaObject(data.nodeSlider?.metatags);
// <Helmet {...metaData} />
//
export const getMetaObject = (drupalMeta) => {
  if (!drupalMeta) {
    return {}
  }

  const filteredMeta = drupalMeta.filter((meta) => meta.tag === 'meta')

  const metatagTeaser = filteredMeta.find(
    (teaser) => teaser.attributes.name === 'description'
  )
  const metatagTitle = filteredMeta.find(
    (title) => title.attributes.name === 'title'
  )
  const metatagRobots = filteredMeta.find(
    (tag) => tag.attributes.name === 'robots'
  )

  return {
    title: metatagTitle?.attributes.content,
    teaser: metatagTeaser?.attributes.content,
    robots: metatagRobots?.attributes.content
  }
}
