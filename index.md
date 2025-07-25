---
layout: default
title: "Home"
---

<section class="hero">
  <div class="hero-content">
    <h1>{{ site.hero.title }}</h1>
    <p>{{ site.hero.subtitle }}</p>

    <div class="social-icons">
      <a href="https://github.com/{{ site.author.social.github }}" target="_blank" title="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/{{ site.author.social.linkedin }}" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:{{ site.author.email }}" target="_blank" title="Email">
        <i class="fas fa-envelope"></i>
      </a>
    </div>

  </div>
</section>

<section class="featured-section">
  <div class="container">
    <h2 class="section-title">{{ site.sections.projects.title }}</h2>
    <p class="section-subtitle">{{ site.sections.projects.subtitle }}</p>
    
    <div class="cards-grid">
      {% for project in site.featured_projects %}
      <div class="card clickable-card" data-href="{{ project.link }}">
        <div class="card-image">
          <img src="{{ '/assets/img/' | append: project.image | relative_url }}" alt="{{ project.title }}">
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-tags">
            {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="section-cta">
      <a href="{{ site.sections.projects.cta_link | relative_url }}" class="btn-primary">{{ site.sections.projects.cta_text }}</a>
    </div>
  </div>
</section>

<section class="featured-section blog-section">
  <div class="container">
    <h2 class="section-title">{{ site.sections.blog.title }}</h2>
    <p class="section-subtitle">{{ site.sections.blog.subtitle }}</p>
    
    <div class="cards-grid">
      {% for post in site.featured_blog_posts %}
      <div class="card blog-card clickable-card" data-href="{{ post.link }}"{% if post.external %} target="_blank"{% endif %}>
        <div class="card-image">
          <img src="{{ '/assets/img/' | append: post.image | relative_url }}" alt="{{ post.title }}">
        </div>
        <div class="card-content">
          <div class="blog-meta">
            <span class="blog-date">{{ post.date }}</span>
            <span class="blog-category">{{ post.category }}</span>
          </div>
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-description">{{ post.description }}</p>
          <div class="card-tags">
            {% if forloop.index == 1 %}
              <span class="tag">Data Science</span>
              <span class="tag">Python</span>
            {% elsif forloop.index == 2 %}
              <span class="tag">Machine Learning</span>
              <span class="tag">Validation</span>
            {% elsif forloop.index == 3 %}
              <span class="tag">Portfolio</span>
              <span class="tag">Writing</span>
            {% endif %}
            {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    
    <div class="section-cta">
      <a href="{{ site.sections.blog.cta_link | relative_url }}" class="btn-primary">{{ site.sections.blog.cta_text }}</a>
    </div>
  </div>
</section>
