---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'writing', 'projects', 'featuredProjects', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---