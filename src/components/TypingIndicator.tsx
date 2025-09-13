import React from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 p-4 animate-fade-up">
      <Avatar className="h-8 w-8 mt-1">
        <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-medium">
          CA
        </AvatarFallback>
      </Avatar>
      
      <div className="bg-card text-card-foreground rounded-xl px-4 py-3 shadow-soft border">
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing"></div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-xs text-muted-foreground ml-2">Campus Assistant is typing...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;