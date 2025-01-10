import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Clock, Users } from "lucide-react";

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const Careers = () => {
  const positions: JobPosition[] = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead the development of our next-generation web applications using React and TypeScript.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Create beautiful and intuitive user experiences for our enterprise products.",
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description:
        "Help our customers succeed by providing expert technical guidance and support.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain our cloud infrastructure and deployment pipelines.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of web development. We're always looking
            for talented individuals to join our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Building2 className="w-8 h-8" />,
              title: "Modern Workspace",
              description: "State-of-the-art offices and remote flexibility",
            },
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Global Impact",
              description: "Work on products used worldwide",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Work-Life Balance",
              description: "Flexible hours and unlimited PTO",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Great Culture",
              description: "Collaborative and inclusive environment",
            },
          ].map((perk, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary mb-4">{perk.icon}</div>
              <h3 className="font-semibold mb-2">{perk.title}</h3>
              <p className="text-muted-foreground text-sm">
                {perk.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
          {positions.map((position, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {position.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" /> {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe2 className="w-4 h-4" /> {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {position.type}
                    </span>
                  </div>
                </div>
                <Button className="md:w-auto w-full group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
