import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  readTime?: string;
  category?: string;
}

const BlogCard = ({
  title = "How to Maximize Your SaaS Productivity yolo",
  description = "Learn the best practices and tips for getting the most out of your SaaS tools and improving team collaboration.",
  imageUrl = "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  date = "Oct 12, 2023",
  readTime = "5 min read",
  category = "Productivity",
}: BlogCardProps) => {
  return (
    <Card className="w-[380px] h-[450px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="w-full group">
          Read More
          <ArrowRight
            size={16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
