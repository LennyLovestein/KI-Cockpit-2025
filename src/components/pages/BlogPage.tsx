import React from "react";
import BlogSection from "../landing/BlogSection";

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and stories from our team
          </p>
        </div>
        <BlogSection />
      </div>
    </div>
  );
};

export default BlogPage;
