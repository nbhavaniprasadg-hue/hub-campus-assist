import React from 'react';
import CampusChat from '../components/CampusChat';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { GraduationCap, Bot, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-campus rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Smart Campus Assistant</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Campus Information System</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Bot className="h-3 w-3" />
                AI Powered
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Zap className="h-3 w-3" />
                24/7 Available
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Main Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-200px)] shadow-medium border-border/50">
              <CampusChat />
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Features Card */}
            <Card className="p-6 shadow-soft border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Features
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Smart Search</p>
                    <p className="text-xs text-muted-foreground">Find campus info instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Real-time Updates</p>
                    <p className="text-xs text-muted-foreground">Always current information</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Multi-category Support</p>
                    <p className="text-xs text-muted-foreground">Covers all campus services</p>
                  </div>
                </div>
              </div>
            </Card>

            <Separator />

            {/* Categories Card */}
            <Card className="p-6 shadow-soft border-border/50">
              <h3 className="font-semibold text-foreground mb-4">Information Categories</h3>
              <div className="space-y-2">
                {[
                  { name: 'Schedules', icon: '📚', color: 'bg-primary/10 text-primary' },
                  { name: 'Facilities', icon: '🏛️', color: 'bg-secondary/10 text-secondary' },
                  { name: 'Dining', icon: '🍽️', color: 'bg-accent/10 text-accent' },
                  { name: 'Library', icon: '📖', color: 'bg-primary/10 text-primary' },
                  { name: 'Administration', icon: '📝', color: 'bg-secondary/10 text-secondary' }
                ].map(category => (
                  <div key={category.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <div className={`h-8 w-8 rounded-md ${category.color} flex items-center justify-center text-sm`}>
                      {category.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Usage Tip */}
            <Card className="p-4 border-accent/20 bg-accent/5">
              <h4 className="font-medium text-accent mb-2 text-sm">💡 Pro Tip</h4>
              <p className="text-xs text-muted-foreground">
                Try asking specific questions like "What's for lunch today?" or "When is the library open?" for the best results!
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Smart Campus Assistant - Making campus life easier with AI</p>
            <p className="mt-1">© 2024 Campus Innovation Lab. Built for students, by students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;