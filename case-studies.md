---
layout: list
title: Case Studies
permalink: /case-studies/
---

{% assign all_tags = site.case_studies | map: "tags" | join: "," | split: "," | uniq %}
<div class="tag-pills">
  <button class="tag-pill active" data-tag="all">All</button>
  {% for tag in all_tags %}
    <button class="tag-pill" data-tag="{{ tag | strip }}">{{ tag | strip }}</button>
  {% endfor %}
</div>

<div class="wave-divider wave-divider--resume">{% include wave-divider.html %}</div>

<div class="cards">
  {% for cs in site.case_studies %}
    <div class="card" data-tags="{{ cs.tags | join: ',' }}">
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