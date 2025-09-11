---
layout: default
title: Artifacts
permalink: /artifacts/
---

<h2>Artifacts</h2>
<div class="cards">
{% for artifact in site._artifacts %}
  <div class="card">
    <a href="{{ artifact.url }}">
      {% if artifact.image %}
      <img src="{{ artifact.image }}" alt="{{ artifact.title }} screenshot">
      {% endif %}
      <h3>{{ artifact.title }}</h3>
      {% if artifact.excerpt %}
      <p>{{ artifact.excerpt }}</p>
      {% endif %}
    </a>
  </div>
{% endfor %}
</div>
