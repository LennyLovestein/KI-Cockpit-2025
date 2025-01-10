import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChangelogItem {
  date: string;
  version: string;
  changes: Array<{
    type: "feature" | "improvement" | "fix";
    description: string;
  }>;
}

const Changelog = () => {
  const changelog: ChangelogItem[] = [
    {
      date: "2024-03-15",
      version: "2.1.0",
      changes: [
        {
          type: "feature",
          description: "Introduced new AI-powered code suggestions",
        },
        {
          type: "improvement",
          description:
            "Enhanced performance of the real-time collaboration feature",
        },
        {
          type: "fix",
          description: "Fixed an issue with project exports in Safari",
        },
      ],
    },
    {
      date: "2024-03-01",
      version: "2.0.0",
      changes: [
        {
          type: "feature",
          description: "Complete UI redesign with improved accessibility",
        },
        {
          type: "feature",
          description: "Added dark mode support across all components",
        },
      ],
    },
    {
      date: "2024-02-15",
      version: "1.9.0",
      changes: [
        {
          type: "improvement",
          description: "Optimized build times by 50%",
        },
        {
          type: "fix",
          description: "Resolved memory leak in the file watcher",
        },
      ],
    },
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "improvement":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
      case "fix":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
          <p className="text-xl text-muted-foreground">
            Keep track of our latest updates and improvements
          </p>
        </div>

        <div className="space-y-8">
          {changelog.map((release, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm text-muted-foreground">
                    {release.date}
                  </div>
                  <div className="font-semibold mt-1">v{release.version}</div>
                </div>

                <div className="flex-1 space-y-4">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start gap-3">
                      <Badge
                        className={`${getBadgeColor(change.type)} capitalize mt-0.5`}
                        variant="secondary"
                      >
                        {change.type}
                      </Badge>
                      <span>{change.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
