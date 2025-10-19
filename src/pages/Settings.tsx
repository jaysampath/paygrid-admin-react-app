import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FormField } from '../components/FormField';

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  margin-bottom: 12px;
`;

const Tab = styled.button<{ selected: boolean }>`
  background: ${props => props.selected ? props.theme.colors.tint : 'transparent'};
  border: ${props => props.selected ? `1px solid ${props.theme.colors.hairline}` : 'none'};
  padding: 10px 14px;
  font-weight: 800;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.selected ? props.theme.colors.accentInk : props.theme.colors.muted};
  box-shadow: ${props => props.selected ? props.theme.shadows.sm : 'none'};
`;

const SettingsForm = styled.form`
  display: grid;
  gap: 20px;
  max-width: 600px;
  margin-bottom: 20px;
`;

const SettingsGroup = styled.div`
  display: grid;
  gap: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

interface SettingsTabProps {
  active: boolean;
  children: React.ReactNode;
}

const SettingsTabContent = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
`;

const SettingsTab: React.FC<SettingsTabProps> = ({ active, children }) => {
  return (
    <SettingsTabContent active={active}>
      {children}
    </SettingsTabContent>
  );
};

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [generalSettings, setGeneralSettings] = useState({
    companyName: 'Bricks Admin',
    supportEmail: 'support@example.com',
    contactPhone: '+91 98765 43210',
    timezone: 'Asia/Kolkata'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: 'all',
    smsNotifications: 'critical',
    lowBalanceThreshold: '1000'
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: 'enabled',
    sessionTimeout: '30',
    passwordExpiry: '90'
  });

  const handleGeneralSettingChange = (field: keyof typeof generalSettings) => (value: string) => {
    setGeneralSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationSettingChange = (field: keyof typeof notificationSettings) => (value: string) => {
    setNotificationSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSecuritySettingChange = (field: keyof typeof securitySettings) => (value: string) => {
    setSecuritySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', {
      generalSettings,
      notificationSettings,
      securitySettings
    });
  };

  return (
    <Page>
      <PageHeader title="Settings">
        System Settings
      </PageHeader>

      <Card>
        <TabContainer>
          <Tab 
            selected={activeTab === 'general'} 
            onClick={() => setActiveTab('general')}
          >
            General
          </Tab>
          <Tab 
            selected={activeTab === 'notifications'} 
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </Tab>
          <Tab 
            selected={activeTab === 'security'} 
            onClick={() => setActiveTab('security')}
          >
            Security
          </Tab>
        </TabContainer>

        <SettingsTab active={activeTab === 'general'}>
          <SettingsForm>
            <SettingsGroup>
              <FormField
                label="Company Name"
                value={generalSettings.companyName}
                onChange={handleGeneralSettingChange('companyName')}
              />
              <FormField
                label="Support Email"
                type="email"
                value={generalSettings.supportEmail}
                onChange={handleGeneralSettingChange('supportEmail')}
              />
              <FormField
                label="Contact Phone"
                value={generalSettings.contactPhone}
                onChange={handleGeneralSettingChange('contactPhone')}
              />
              <FormField
                label="Timezone"
                type="select"
                value={generalSettings.timezone}
                onChange={handleGeneralSettingChange('timezone')}
                options={[
                  { value: 'Asia/Kolkata', label: 'India (GMT+5:30)' },
                  { value: 'UTC', label: 'UTC' }
                ]}
              />
            </SettingsGroup>
          </SettingsForm>
        </SettingsTab>

        <SettingsTab active={activeTab === 'notifications'}>
          <SettingsForm>
            <SettingsGroup>
              <FormField
                label="Email Notifications"
                type="select"
                value={notificationSettings.emailNotifications}
                onChange={handleNotificationSettingChange('emailNotifications')}
                options={[
                  { value: 'all', label: 'All Notifications' },
                  { value: 'important', label: 'Important Only' },
                  { value: 'none', label: 'None' }
                ]}
              />
              <FormField
                label="SMS Notifications"
                type="select"
                value={notificationSettings.smsNotifications}
                onChange={handleNotificationSettingChange('smsNotifications')}
                options={[
                  { value: 'all', label: 'All Notifications' },
                  { value: 'critical', label: 'Critical Only' },
                  { value: 'none', label: 'None' }
                ]}
              />
              <FormField
                label="Low Balance Threshold (₹)"
                type="number"
                value={notificationSettings.lowBalanceThreshold}
                onChange={handleNotificationSettingChange('lowBalanceThreshold')}
              />
            </SettingsGroup>
          </SettingsForm>
        </SettingsTab>

        <SettingsTab active={activeTab === 'security'}>
          <SettingsForm>
            <SettingsGroup>
              <FormField
                label="Two-Factor Authentication"
                type="select"
                value={securitySettings.twoFactorAuth}
                onChange={handleSecuritySettingChange('twoFactorAuth')}
                options={[
                  { value: 'enabled', label: 'Enabled' },
                  { value: 'disabled', label: 'Disabled' }
                ]}
              />
              <FormField
                label="Session Timeout (minutes)"
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={handleSecuritySettingChange('sessionTimeout')}
              />
              <FormField
                label="Password Expiry (days)"
                type="number"
                value={securitySettings.passwordExpiry}
                onChange={handleSecuritySettingChange('passwordExpiry')}
              />
            </SettingsGroup>
          </SettingsForm>
        </SettingsTab>

        <ButtonGroup>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={handleSaveSettings}>
            Save Changes
          </Button>
        </ButtonGroup>
      </Card>
    </Page>
  );
};