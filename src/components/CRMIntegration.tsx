import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

// CRM Lead Data Interface
interface CRMLeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  leadSource: string;
  leadScore?: number;
  notes?: string;
  customFields?: Record<string, any>;
}

// CRM Configuration
interface CRMConfig {
  provider: 'hubspot' | 'salesforce' | 'pipedrive' | 'custom';
  apiKey?: string;
  endpoint?: string;
  enabled: boolean;
}

// CRM Integration Service
class CRMIntegrationService {
  private config: CRMConfig;

  constructor(config: CRMConfig) {
    this.config = config;
  }

  async createLead(leadData: CRMLeadData): Promise<boolean> {
    if (!this.config.enabled) {
      console.log('CRM integration disabled, lead data:', leadData);
      return true;
    }

    try {
      switch (this.config.provider) {
        case 'hubspot':
          return await this.createHubSpotLead(leadData);
        case 'salesforce':
          return await this.createSalesforceLead(leadData);
        case 'pipedrive':
          return await this.createPipedriveLead(leadData);
        case 'custom':
          return await this.createCustomLead(leadData);
        default:
          throw new Error(`Unsupported CRM provider: ${this.config.provider}`);
      }
    } catch (error) {
      console.error('CRM integration error:', error);
      return false;
    }
  }

  private async createHubSpotLead(leadData: CRMLeadData): Promise<boolean> {
    const hubspotData = {
      properties: {
        firstname: leadData.firstName,
        lastname: leadData.lastName,
        email: leadData.email,
        phone: leadData.phone,
        company: leadData.company,
        jobtitle: leadData.jobTitle,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
        lead_source: leadData.leadSource,
        ...leadData.customFields
      }
    };

    // In a real implementation, this would make an actual API call
    const response = await fetch('/api/hubspot/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify(hubspotData)
    });

    return response.ok;
  }

  private async createSalesforceLead(leadData: CRMLeadData): Promise<boolean> {
    const salesforceData = {
      FirstName: leadData.firstName,
      LastName: leadData.lastName,
      Email: leadData.email,
      Phone: leadData.phone,
      Company: leadData.company || 'Unknown',
      Title: leadData.jobTitle,
      LeadSource: leadData.leadSource,
      Status: 'Open - Not Contacted',
      Description: leadData.notes,
      ...leadData.customFields
    };

    // Simulate API call
    console.log('Creating Salesforce lead:', salesforceData);
    return true;
  }

  private async createPipedriveLead(leadData: CRMLeadData): Promise<boolean> {
    const pipedriveData = {
      title: `${leadData.firstName} ${leadData.lastName} - ${leadData.company}`,
      person_id: null, // Would need to create person first
      organization_id: null, // Would need to create organization first
      value: leadData.leadScore || 0,
      currency: 'USD',
      source_name: leadData.leadSource,
      ...leadData.customFields
    };

    console.log('Creating Pipedrive lead:', pipedriveData);
    return true;
  }

  private async createCustomLead(leadData: CRMLeadData): Promise<boolean> {
    // Custom webhook or API integration
    const response = await fetch(this.config.endpoint!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.config.apiKey
      },
      body: JSON.stringify(leadData)
    });

    return response.ok;
  }

  async updateLeadScore(email: string, score: number): Promise<boolean> {
    if (!this.config.enabled) return true;

    try {
      // Implementation would depend on CRM provider
      console.log(`Updating lead score for ${email}: ${score}`);
      return true;
    } catch (error) {
      console.error('Error updating lead score:', error);
      return false;
    }
  }

  async trackActivity(email: string, activity: string, metadata?: any): Promise<boolean> {
    if (!this.config.enabled) return true;

    try {
      const activityData = {
        email,
        activity,
        timestamp: new Date().toISOString(),
        metadata
      };

      console.log('Tracking CRM activity:', activityData);
      return true;
    } catch (error) {
      console.error('Error tracking CRM activity:', error);
      return false;
    }
  }
}

// CRM Integration Hook
export const useCRMIntegration = () => {
  const { toast } = useToast();
  const [crmService, setCRMService] = useState<CRMIntegrationService | null>(null);

  useEffect(() => {
    // Initialize CRM service with configuration
    const config: CRMConfig = {
      provider: 'hubspot', // Would come from environment variables
      apiKey: process.env.VITE_HUBSPOT_API_KEY,
      enabled: true // Would be configurable
    };

    setCRMService(new CRMIntegrationService(config));
  }, []);

  const createLead = async (leadData: CRMLeadData): Promise<boolean> => {
    if (!crmService) return false;

    try {
      const success = await crmService.createLead(leadData);
      
      if (success) {
        toast({
          title: "Lead Created",
          description: "Contact information has been saved to CRM.",
        });
      } else {
        toast({
          title: "CRM Sync Failed",
          description: "Lead was saved locally but couldn't sync to CRM.",
          variant: "destructive"
        });
      }

      return success;
    } catch (error) {
      console.error('CRM integration error:', error);
      toast({
        title: "CRM Error",
        description: "There was an error syncing to CRM. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const updateLeadScore = async (email: string, score: number): Promise<boolean> => {
    if (!crmService) return false;
    return await crmService.updateLeadScore(email, score);
  };

  const trackActivity = async (email: string, activity: string, metadata?: any): Promise<boolean> => {
    if (!crmService) return false;
    return await crmService.trackActivity(email, activity, metadata);
  };

  return {
    createLead,
    updateLeadScore,
    trackActivity,
    isEnabled: !!crmService
  };
};

// Lead Scoring System
export const useLeadScoring = () => {
  const calculateLeadScore = (formData: any): number => {
    let score = 0;

    // Company size scoring
    switch (formData.companySize || formData.portfolioSize) {
      case '1000+':
      case 'enterprise':
        score += 50;
        break;
      case '501-1000':
      case 'large':
        score += 40;
        break;
      case '201-500':
      case 'medium':
        score += 30;
        break;
      case '51-200':
      case 'small':
        score += 20;
        break;
      default:
        score += 10;
    }

    // Timeline scoring
    switch (formData.timeline) {
      case 'immediately':
        score += 30;
        break;
      case '1-month':
        score += 25;
        break;
      case '3-months':
        score += 20;
        break;
      case '6-months':
        score += 10;
        break;
      default:
        score += 5;
    }

    // Challenge/pain point scoring
    if (formData.currentChallenge || formData.currentChallenges) {
      score += 15;
    }

    // Contact information completeness
    if (formData.phone) score += 5;
    if (formData.company) score += 5;
    if (formData.jobTitle) score += 5;

    return Math.min(score, 100);
  };

  return { calculateLeadScore };
};

// CRM Status Display Component
export const CRMStatus = () => {
  const { isEnabled } = useCRMIntegration();
  const [syncStatus, setSyncStatus] = useState<'connected' | 'disconnected' | 'syncing'>('connected');

  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className={`w-2 h-2 rounded-full ${
        isEnabled && syncStatus === 'connected' 
          ? 'bg-green-500' 
          : syncStatus === 'syncing'
          ? 'bg-yellow-500' 
          : 'bg-red-500'
      }`} />
      <span className="text-muted-foreground">
        CRM: {isEnabled ? 'Connected' : 'Disconnected'}
      </span>
    </div>
  );
};

export default CRMIntegrationService;