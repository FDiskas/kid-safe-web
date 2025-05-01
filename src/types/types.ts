export interface SafetyCheckResult {
  url: string;
  status: boolean;
  isLoading?: boolean;
  error?: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}