import React from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
}

const BlogSection = ({
  title = "Latest from Our Blog",
  subtitle = "Stay up to date with the latest news, tutorials, and insights from our team",
  posts = [
    {
      title: "10 Essential SaaS Metrics You Should Track",
      description:
        "Learn about the key metrics that can help you measure and improve your SaaS business performance.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      date: "Oct 15, 2023",
      readTime: "8 min read",
      category: "Analytics",
    },
    {
      title: "The Future of Remote Work Tools",
      description:
        "Discover the emerging trends and technologies shaping the future of remote collaboration.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      date: "Oct 10, 2023",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      title: "Building a Customer-Centric SaaS Culture",
      description:
        "Tips and strategies for creating a company culture that puts customers first.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      date: "Oct 5, 2023",
      readTime: "7 min read",
      category: "Culture",
    },
  ],
}: BlogSectionProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
