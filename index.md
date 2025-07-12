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
      <div class="card">
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
      <a href="{{ site.sections.projects.cta_link }}" class="btn-primary">{{ site.sections.projects.cta_text }}</a>
    </div>
  </div>
</section>

<section class="featured-section blog-section">
  <div class="container">
    <h2 class="section-title">{{ site.sections.blog.title }}</h2>
    <p class="section-subtitle">{{ site.sections.blog.subtitle }}</p>
    
    <div class="cards-grid">
      <div class="card blog-card">
        <div class="card-content">
          <div class="blog-meta">
            <span class="blog-date">Dec 10, 2024</span>
            <span class="blog-category">Data Science</span>
          </div>
          <h3 class="card-title">Getting Started with Python for Data Analysis</h3>
          <p class="card-description">A comprehensive guide to using Python libraries like Pandas and NumPy for effective data analysis workflows.</p>
          <a href="/blog/python-data-analysis" class="read-more">Read More →</a>
        </div>
      </div>
      
      <div class="card blog-card">
        <div class="card-content">
          <div class="blog-meta">
            <span class="blog-date">Dec 5, 2024</span>
            <span class="blog-category">Machine Learning</span>
          </div>
          <h3 class="card-title">Understanding Model Validation Techniques</h3>
          <p class="card-description">Deep dive into cross-validation, train-test splits, and other essential techniques for robust model evaluation.</p>
          <a href="/blog/model-validation" class="read-more">Read More →</a>
        </div>
      </div>
      
      <div class="card blog-card">
        <div class="card-content">
          <div class="blog-meta">
            <span class="blog-date">Nov 28, 2024</span>
            <span class="blog-category">Visualization</span>
          </div>
          <h3 class="card-title">Creating Effective Data Visualizations</h3>
          <p class="card-description">Best practices for designing clear, compelling visualizations that tell your data's story effectively.</p>
          <a href="/blog/data-visualization" class="read-more">Read More →</a>
        </div>
      </div>
    </div>
    
    <div class="section-cta">
      <a href="{{ site.sections.blog.cta_link }}" class="btn-primary">{{ site.sections.blog.cta_text }}</a>
    </div>
  </div>
</section>
