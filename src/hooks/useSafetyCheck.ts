import { useState } from 'react';
import { checkUrlSafety } from '../utils/api';
import { SafetyCheckResult } from '../types/types';

export const useSafetyCheck = () => {
  const [result, setResult] = useState<SafetyCheckResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkUrl = async (url: string) => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setResult(null);
      
      const data = await checkUrlSafety(url);
      
      setResult({
        url: data.url,
        status: data.status,
      });
    } catch (err) {
      setError('Failed to check URL safety. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    result,
    isLoading,
    error,
    checkUrl
  };
};