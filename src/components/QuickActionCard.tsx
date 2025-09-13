import React from 'react';
import { QuickAction } from '../types/campus';
import { Card, CardContent } from './ui/card';

interface QuickActionCardProps {
  action: QuickAction;
  onClick: (action: QuickAction) => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ action, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
      onClick={() => onClick(action)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{action.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm mb-1">
              {action.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {action.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;