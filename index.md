---
layout: default
title: Home
---

<header class="hero">
  <h1>Sara Ingham</h1>
  <p>UX researcher with experience in information architecture, taxonomy, ontology, and metadata modeling.</p>
  <a href="{{ '/resume' | relative_url }}" class="btn">View Resume</a>
</header>

## Featured Case Studies

<div class="cards">
{% for cs in site.case_studies %}
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

## Artifacts

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

