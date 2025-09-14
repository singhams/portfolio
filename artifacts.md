---
layout: gallery
title: Artifacts
permalink: /artifacts/
---

<div class="cards artifacts-gallery">
  {% for artifact in site.artifacts %}
    <div class="card">
      <a href="{{ artifact.url | relative_url }}">
        {% if artifact.image %}
        <div class="card-thumb">
          <img src="{{ artifact.image | relative_url }}" alt="{{ artifact.title }} thumbnail">
        </div>
        {% endif %}
        <h3>{{ artifact.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>
