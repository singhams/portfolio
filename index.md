---
layout: default
title: Home
---

<header class="hero">
  <h1>Hi, I'm [Your Name]</h1>
  <p>Designer & Developer. I create digital experiences that are fast, accessible, and visually striking.</p>
  <a href="{{ '/resume' | relative_url }}" class="btn">View Resume</a>
</header>

## Featured Case Studies
{% for cs in site.case_studies %}
- [{{ cs.title }}]({{ cs.url }})
{% endfor %}

## Artifacts
- Artifact 1
- Artifact 2
