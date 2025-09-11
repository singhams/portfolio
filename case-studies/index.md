---
layout: default
title: Case Studies
permalink: /case-studies/
---

<h2>Case Studies</h2>
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
