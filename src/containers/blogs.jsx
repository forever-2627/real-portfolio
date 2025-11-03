import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const BLOGS = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Modern Architecture",
      excerpt: "Learn how to design and implement scalable web applications using modern architectural patterns, microservices, and cloud technologies.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "/img/superfreevpn.png"
    },
    {
      id: 2,
      title: "Introduction to Geospatial Data Visualization",
      excerpt: "Explore techniques for visualizing geospatial data using modern tools like Mapbox, D3.js, and Leaflet to create interactive maps.",
      author: "John Doe",
      date: "March 10, 2024",
      category: "GIS & Mapping",
      readTime: "8 min read",
      image: "/img/mapanalysis.png"
    },
    {
      id: 3,
      title: "Machine Learning for Environmental Monitoring",
      excerpt: "Discover how machine learning algorithms can be used to monitor and analyze environmental data, including wetland detection and satellite imagery analysis.",
      author: "John Doe",
      date: "March 5, 2024",
      category: "AI/ML",
      readTime: "10 min read",
      image: "/img/wetlanddetection.png"
    },
    {
      id: 4,
      title: "Best Practices for React Performance Optimization",
      excerpt: "A comprehensive guide to optimizing React applications for better performance, including code splitting, lazy loading, and memoization techniques.",
      author: "John Doe",
      date: "February 28, 2024",
      category: "Web Development",
      readTime: "6 min read",
      image: "/img/superfreevpn.png"
    },
    {
      id: 5,
      title: "Creating Interactive Data Dashboards",
      excerpt: "Learn how to build interactive data visualization dashboards using D3.js, React, and modern charting libraries to present complex data effectively.",
      author: "John Doe",
      date: "February 20, 2024",
      category: "Data Visualization",
      readTime: "7 min read",
      image: "/img/mapanalysis.png"
    },
    {
      id: 6,
      title: "Real-time Applications with WebSocket and Node.js",
      excerpt: "Explore building real-time applications using WebSocket technology, Node.js, and modern frontend frameworks for instant data synchronization.",
      author: "John Doe",
      date: "February 15, 2024",
      category: "Web Development",
      readTime: "9 min read",
      image: "/img/wetlanddetection.png"
    }
  ];

  const categories = ["All", ...new Set(BLOGS.map((b) => b.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBlogs(BLOGS);
    } else {
      setFilteredBlogs(
        BLOGS.filter((b) => b.category === selectedCategory)
      );
    }
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <section className="blogs-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Header Section */}
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">
              MY BLOGS
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Insights, tutorials, and thoughts on web development, AI, and technology
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="col-12">
            <div className="projects-filter-wrapper d-flex justify-content-center flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`project-filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="row g-4">
          {filteredBlogs.map((blog, index) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <article className="blog-card">
                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-overlay">
                    <Link to={`/blog/${blog.id}`} className="blog-read-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-date">{blog.date}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <i className="fa fa-user me-2"></i>
                      {blog.author}
                    </div>
                    <div className="blog-read-time">
                      <i className="fa fa-clock me-2"></i>
                      {blog.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Results Count */}
        {filteredBlogs.length === 0 && (
          <div className="text-center mt-5" data-aos="fade-up">
            <p className="text-white-50 fs-5">
              No blogs found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;

