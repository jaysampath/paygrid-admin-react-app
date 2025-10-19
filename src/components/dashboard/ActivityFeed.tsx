import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';

const ActivityItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.hairline};

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.tint};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  color: ${props => props.theme.colors.accentInk};
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const ActivityTime = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.muted};
`;

interface ActivityFeedProps {
  activities: Array<{
    id: string;
    icon: string;
    title: string;
    time: string;
  }>;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <Card title="Recent Activity">
      {activities.map(activity => (
        <ActivityItem key={activity.id}>
          <ActivityIcon>{activity.icon}</ActivityIcon>
          <ActivityContent>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityTime>{activity.time}</ActivityTime>
          </ActivityContent>
        </ActivityItem>
      ))}
    </Card>
  );
};