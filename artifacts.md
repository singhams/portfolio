---
layout: gallery
title: Artifacts
permalink: /artifacts/
---

<!-- Add this temporarily at the top of your content -->
<div style="display:none">
Debug info:
Number of artifacts: {{ site.artifacts.size }}
{% for artifact in site.artifacts %}
  - {{ artifact.title }}: {{ artifact.url }}
{% endfor %}
</div>

<div class="cards artifacts-gallery">
  <p>A curated selection of work spanning research, strategy, and visual design. From dashboards and user flows to illustrations and branding, these artifacts showcase the systems, experiences, and stories I create to help people and teams make sense of complex information. </p>
  {% assign sorted_artifacts = site.artifacts | sort: "order" %}
  {% for artifact in sorted_artifacts %}
    <div class="card {% if artifact.featured %}featured{% endif %}">
      <a href="{{ artifact.url | relative_url }}">
        <div class="card-thumb">
          <img src="{{ artifact.image | relative_url }}" 
               alt="{{ artifact.title }} thumbnail">
        </div>
        <h3>{{ artifact.title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>