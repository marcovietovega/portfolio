---
layout: default
title: "Blog"
description: "Insights, tutorials, and thoughts on data science, machine learning, and analytics by Marco Vieto Vega."
---

<div class="blog-page">

<section class="page-header" style="background: url('{{ '/assets/img/blog-bg.jpg' | relative_url }}') center/cover no-repeat;">
  <div class="container">
    <h1 class="page-title">My Blog</h1>
    <p class="page-subtitle">Insights, tutorials, and thoughts on data science, machine learning, and analytics</p>
  </div>
</section>

<section class="blog-section">
  <div class="container">
    <div class="blog-grid">
      {% for post in site.featured_blog_posts %}
      <div class="blog-card clickable-card" data-href="{{ post.link }}"{% if post.external %} target="_blank"{% endif %}>
        <div class="blog-image">
          <img src="{{ '/assets/img/' | append: post.image | relative_url }}" alt="Blog post image for {{ post.title }}" loading="lazy">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">{{ post.date }}</span>
          </div>
          <h2 class="blog-title">{{ post.title }}</h2>
          <p class="blog-description">{{ post.description }}</p>
          <div class="blog-tags">
            {% for tag in post.tags %}
            <span class="tag" onclick="event.stopPropagation();">{{ tag }}</span>
            {% endfor %}
          </div>
          <div class="blog-links">
            {% if post.link contains 'http' %}
              <a href="{{ post.link }}" target="_blank" class="btn-blog">Read Article</a>
            {% else %}
              <a href="{{ post.link }}" class="btn-blog">Read More</a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="topics-section">
  <div class="container">
    <h2 class="section-title">Topics I Write About</h2>
    <div class="topics-grid">
      <div class="topic-category">
        <h3>Data Science</h3>
        <div class="topics-list">
          <span class="topic-tag">Data Analysis</span>
          <span class="topic-tag">Statistical Modeling</span>
          <span class="topic-tag">Data Visualization</span>
          <span class="topic-tag">Predictive Analytics</span>
        </div>
      </div>
      <div class="topic-category">
        <h3>Machine Learning</h3>
        <div class="topics-list">
          <span class="topic-tag">Supervised Learning</span>
          <span class="topic-tag">Deep Learning</span>
          <span class="topic-tag">NLP</span>
          <span class="topic-tag">Computer Vision</span>
        </div>
      </div>
      <div class="topic-category">
        <h3>Tools & Technology</h3>
        <div class="topics-list">
          <span class="topic-tag">Python</span>
          <span class="topic-tag">R</span>
          <span class="topic-tag">SQL</span>
          <span class="topic-tag">Cloud Computing</span>
        </div>
      </div>
      <div class="topic-category">
        <h3>Industry Insights</h3>
        <div class="topics-list">
          <span class="topic-tag">Case Studies</span>
          <span class="topic-tag">Best Practices</span>
          <span class="topic-tag">Industry Trends</span>
          <span class="topic-tag">Career Advice</span>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
