---
layout: gallery
title: Artifacts
permalink: /artifacts/
---

<div class="cards artifacts-gallery">
  <p>A curated selection of work spanning research, strategy, and visual design. From dashboards and user flows to illustrations and branding, these artifacts showcase the systems, experiences, and stories I create to help people and teams make sense of complex information.</p>
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
