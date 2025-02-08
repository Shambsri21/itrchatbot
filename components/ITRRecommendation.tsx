import React from 'react';
import { FileText } from 'lucide-react';
import { ITRRecommendation } from '../types';

interface ITRRecommendationProps {
  recommendation: ITRRecommendation;
}

export function ITRRecommendationCard({ recommendation }: ITRRecommendationProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Recommended ITR Form</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{recommendation.form}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-2">Why this form?</h4>
          <p className="text-gray-800">{recommendation.explanation}</p>
        </div>
      </div>
    </div>
  );
}