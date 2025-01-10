import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  Book,
  Code,
  Terminal,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface DocSection {
  icon: React.ReactNode;
  title: string;
  items: Array<{
    title: string;
    href: string;
  }>;
}

const Documentation = () => {
  const [activeSection, setActiveSection] = useState<string>("Getting Started");
  const [openSections, setOpenSections] = useState<string[]>([
    "Getting Started",
  ]);

  const sections: DocSection[] = [
    {
      icon: <Book className="w-4 h-4" />,
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "#introduction" },
        { title: "Quick Start", href: "#quick-start" },
        { title: "Installation", href: "#installation" },
      ],
    },
    {
      icon: <Code className="w-4 h-4" />,
      title: "Components",
      items: [
        { title: "Button", href: "#button" },
        { title: "Card", href: "#card" },
        { title: "Input", href: "#input" },
        { title: "Dialog", href: "#dialog" },
      ],
    },
    {
      icon: <Terminal className="w-4 h-4" />,
      title: "API Reference",
      items: [
        { title: "Authentication", href: "#auth" },
        { title: "Endpoints", href: "#endpoints" },
        { title: "Error Handling", href: "#errors" },
      ],
    },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Guides",
      items: [
        { title: "Deployment", href: "#deployment" },
        { title: "Security", href: "#security" },
        { title: "Performance", href: "#performance" },
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 rounded-lg border bg-card p-4">
              <div className="mb-4">
                <Input
                  placeholder="Search documentation..."
                  className="w-full"
                  prefix={<Search className="w-4 h-4 text-muted-foreground" />}
                />
              </div>
              <ScrollArea className="h-[calc(100vh-180px)]">
                <div className="space-y-2">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-2 font-medium",
                          openSections.includes(section.title)
                            ? "text-primary"
                            : "text-muted-foreground",
                        )}
                        onClick={() => toggleSection(section.title)}
                      >
                        {openSections.includes(section.title) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        {section.icon}
                        {section.title}
                      </Button>
                      {openSections.includes(section.title) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {section.items.map((item) => (
                            <Button
                              key={item.title}
                              variant="ghost"
                              className={cn(
                                "w-full justify-start pl-8 text-sm",
                                activeSection === item.title
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground",
                              )}
                              onClick={() => setActiveSection(item.title)}
                            >
                              {item.title}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-bold mb-6">Introduction</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Welcome to our documentation. Learn how to integrate and use our
                platform effectively.
              </p>

              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      {section.icon}
                      {section.title}
                    </h2>
                    <div className="grid gap-4">
                      {section.items.map((item) => (
                        <div
                          key={item.title}
                          id={item.href.replace("#", "")}
                          className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
