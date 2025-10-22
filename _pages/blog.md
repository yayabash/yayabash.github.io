---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: False
  collection: posts
  permalink: /page/:num/
  per_page: 0
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{{ site.blog_name }}

{{ site.blog_description }}

{% endif %}
{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site display_categories.size > 0 %}

  {% for tag in site.display_tags %}
  {{ tag }}
  {% unless forloop.last %}
  •
  {% endunless %} {% endfor %} {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
  •
  {% endif %} {% for category in site.display_categories %}
  {{ category }}
  {% unless forloop.last %}
  •
  {% endunless %} {% endfor %}

{% endif %}

This blog section is currently empty. Check back later for updates or explore my projects in the meantime!