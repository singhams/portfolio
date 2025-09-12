---
layout: default
title: Artifacts
permalink: /artifacts/
---

<h2>Artifacts</h2>
<div class="cards">
{% for artifact in site.artifacts %}
  <div class="card">
    <a href="{{ cs.url | relative_url }}">
      {% if cs.image %}
      <img src="{{ cs.image | relative_url }}" alt="{{ cs.title }} screenshot">
      {% endif %}
      <h3>{{ cs.title }}</h3>
      {% if cs.excerpt %}
      <p>{{ cs.excerpt }}</p>
      {% endif %}
    </a>
  </div>
{% endfor %}
</div>
