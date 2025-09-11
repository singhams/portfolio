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

<div class="cards">
{% for cs in site.case_studies %}
  <div class="card">
    <a href="{{ cs.url }}">
      {% if cs.image %}
      <img src="{{ cs.image }}" alt="{{ cs.title }} screenshot">
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

