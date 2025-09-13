import React, { useState, useRef, useEffect } from 'react';
import { Message, QuickAction } from '../types/campus';
import { campusData, quickActions, responsePatterns } from '../data/campusData';
import ChatMessage from './ChatMessage';
import QuickActionCard from './QuickActionCard';
import TypingIndicator from './TypingIndicator';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Send, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const CampusChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: responsePatterns.greeting[0],
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Search through campus data for relevant information
    const allData = [
      ...campusData.schedules,
      ...campusData.facilities,
      ...campusData.dining,
      ...campusData.library,
      ...campusData.admin
    ];

    // Find matching information based on keywords
    const relevantInfo = allData.find(info => 
      info.tags.some(tag => message.includes(tag.toLowerCase())) ||
      message.includes(info.title.toLowerCase())
    );

    if (relevantInfo) {
      return relevantInfo.content;
    }

    // Handle specific common questions
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return responsePatterns.greeting[Math.floor(Math.random() * responsePatterns.greeting.length)];
    }

    if (message.includes('help') || message.includes('what can you do')) {
      return `I can help you with:

🔹 **Class Schedules** - Today's classes and exam dates
🔹 **Campus Facilities** - Buildings, labs, and recreation centers  
🔹 **Dining Services** - Menus, hours, and meal plans
🔹 **Library Information** - Hours, services, and resources
🔹 **Administrative Help** - Registration, financial aid, and support services

Just ask me anything about campus life, or click one of the quick actions above!`;
    }

    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with regarding campus services?";
    }

    // Default response for unrecognized queries
    return responsePatterns.notFound[Math.floor(Math.random() * responsePatterns.notFound.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: QuickAction) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: `Tell me about ${action.title.toLowerCase()}`,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(action.title + ' ' + action.category),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Card className="border-b border-border/50 rounded-none bg-gradient-primary">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-primary-foreground">
            <Sparkles className="h-5 w-5" />
            Campus Assistant
          </CardTitle>
          <p className="text-primary-foreground/80 text-sm">
            Your AI-powered guide to campus information and services
          </p>
        </CardHeader>
      </Card>

      {/* Quick Actions */}
      {messages.length <= 2 && (
        <div className="p-4 border-b border-border/30 bg-gradient-subtle">
          <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {quickActions.map(action => (
              <QuickActionCard
                key={action.id}
                action={action}
                onClick={handleQuickAction}
              />
            ))}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <ScrollArea className="flex-1 px-0" ref={scrollAreaRef}>
        <div className="space-y-0">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <Card className="border-t border-border/50 rounded-none bg-card">
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about schedules, facilities, dining, library, or admin services..."
              className="flex-1 border-border/50 focus:border-primary/50"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampusChat;