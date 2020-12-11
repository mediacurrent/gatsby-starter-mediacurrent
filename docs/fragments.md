---
slug: '/docs/fragments'
title: 'Docs | Fragments'
---

# Fragments

Fragments are a GraphQL feature that allow you to store a set of fields that should be queried in to a variable for reuse. They are helpful for semantics and reducing LOC.

The project includes a `src/fragments` directory for storing.

## Example

Here is an example query, and how a fragment simplifies it. Imagine the below query needing to exist on every page to get its metadata for inserting in to the `<head>` tag.

```graphql
  query {
    page {
      pageUrl
      metadata {
        description
        title
        thumbnail {
          src
        }
      }
    }
  }
`
```

We can instead store those selected fields in a fragment. The fragment is defined alongside the `type` that it can be used on. In this case it is `on Page`. Because we use the `export` keyword, Gatsby automatically finds this fragment and it can be use elsewhere without importing it.

```javascript
import { graphql } from 'gatsby'

export const siteFragment = graphql`
  fragment PageFragment on Page {
    pageMetadata {
      pageUrl
      metadata {
        description
        title
        thumbnail {
          src
        }
      }
    }
  }
`
```

Now, our query would look like this wherever we needed it. Much cleaner!

```graphql
  query {
    page {
    ...PageFragment
    }
  }
`
```
