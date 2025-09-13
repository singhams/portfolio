---
layout: default
title: Artifacts
permalink: /artifacts/
---

<div class="container">
  <h2>Artifacts</h2>
  <div class="cards">
    {% for artifact in site.artifacts %}
      <div class="card">
        <a href="{{ artifact.url | relative_url }}">
          {% if artifact.image %}
          <img src="{{ artifact.image | relative_url }}" alt="{{ artifact.title }} screenshot">
          {% endif %}
          <h3>{{ artifact.title }}</h3>
          {% if artifact.excerpt %}
          <p>{{ artifact.excerpt }}</p>
          {% endif %}
        </a>
      </div>
    {% endfor %}
  </div>
</div>
