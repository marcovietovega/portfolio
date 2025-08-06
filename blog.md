---
layout: default
title: "Blog"
description: "Sharing practical lessons, projects, and ideas from my journey in data science and machine learning by Marco Vieto Vega."
---

<div class="blog-page">

<section class="page-header" style="background: url('{{ '/assets/img/blog-bg.jpg' | relative_url }}') center/cover no-repeat;">
  <div class="container">
    <h1 class="page-title">My Blog</h1>
    <p class="page-subtitle">Sharing practical lessons, projects, and ideas from my journey in data science and machine learning</p>
  </div>
</section>

<section class="blog-section">
  <div class="container">
    <div class="blog-grid">
      {% for post in site.blog_posts %}
      <div class="blog-card">
        <div class="blog-image">
          <img src="{{ '/assets/img/' | append: post.image | relative_url }}" alt="Blog post image for {{ post.title }}" loading="lazy">
          <div class="blog-tags blog-tags-overlay">
            {% for tag in post.tags %}
            <span class="tag tag-small">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">{{ post.date }}</span>
          </div>
          <h2 class="blog-title">{{ post.title }}</h2>
          <p class="blog-description">{{ post.description }}</p>
          <div class="blog-links">
            {% if post.external %}
              <a href="{{ post.link }}" target="_blank" class="btn-project btn-primary">
                <i class="fas fa-external-link-alt"></i> Read Article
              </a>
            {% else %}
              <a href="{{ post.link }}" class="btn-project btn-secondary">
                <i class="fas fa-book-open"></i> Read More
              </a>
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
    <h2 class="section-title">Topics I Write About  (and Plan to Explore)</h2>
    <div class="topics-grid">
      <div class="topic-category">
        <h3>Data Science</h3>
        <div class="topics-list">
          <span class="topic-tag">Data Analysis</span>
          <span class="topic-tag">Modeling Decisions</span>
          <span class="topic-tag">Data Visualization</span>
          <span class="topic-tag">Building Solutions</span>
        </div>
      </div>
      <div class="topic-category">
        <h3>Machine Learning</h3>
        <div class="topics-list">
          <span class="topic-tag">ML Projects</span>
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
          <span class="topic-tag">Apache Airflow</span>
          <span class="topic-tag">APIs</span>
        </div>
      </div>
      <div class="topic-category">
        <h3>Learning & Reflections</h3>
        <div class="topics-list">
          <span class="topic-tag">What I’m learning</span>
          <span class="topic-tag">Lessons from projects</span>
          <span class="topic-tag">Challenges & Reflections</span>
          <span class="topic-tag">Project Storytelling</span>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
