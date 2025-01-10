import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Mail className="w-6 h-6 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">support@example.com</p>
          </Card>

          <Card className="p-6 text-center">
            <Phone className="w-6 h-6 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-6 text-center">
            <MessageSquare className="w-6 h-6 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground">Available 24/7</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="How can we help?" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                placeholder="Tell us more about your inquiry..."
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full md:w-auto">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
