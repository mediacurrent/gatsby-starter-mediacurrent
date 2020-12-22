---
slug: '/docs/gatsby-cloud'
title: 'Docs | Gatsby Cloud'
---

# Gatsby Cloud

Gatsby Cloud is a platform service built around providing a better Gatsby experience. It offers solutions for things such as:

- Incremental Builds
- Preview
- hosting and CDN

Setup is simple and the benefits are large. The main thing that may need to be adjusted is that it does not have a Bitbucket integration currently, so the devops team will need to mirror your project's Bitbucket repo to a Github repo so that it can be integrated with Gatsby Cloud.

For Incremental Builds and Preview, you must install the latest [Gatsby Drupal module](https://www.drupal.org/project/gatsby).

## Incremental Builds

Incremental Builds allows your site to build much faster for content changes. While code changes still require a full rebuild, even those are faster on Gatsby Cloud. This is configured by pasting the Incremental Build webhook URL from Gatsby Cloud settings in to the field for the webhook in the Gatsby Drupal module settings. You should see a flag next to the build in the Gastby Cloud logs noting if the build is incremental or not.

## Preview

Preview allows content editors to quickly see changes to content without waiting for a build. This is configured by pasting the Preview Server URL from the Gatsby Cloud settings in to the field in the Gatsby Drupal module settings page. When it is configured and content is saved, the Preview Server page should hot reload (no need to refresh the page) within a few seconds of the save.
