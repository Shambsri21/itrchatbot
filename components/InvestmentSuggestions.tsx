import React from 'react';
import { Wallet } from 'lucide-react';
import { InvestmentSuggestion } from '../types';

interface InvestmentSuggestionsProps {
  suggestions: InvestmentSuggestion[];
}

export function InvestmentSuggestions({ suggestions }: InvestmentSuggestionsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Wallet className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Tax-Saving Investment Suggestions</h3>
      </div>
      <div className="grid gap-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800">{suggestion.type}</h4>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {suggestion.section}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
            <p className="text-sm font-medium text-blue-600">
              Max deduction: {suggestion.maxDeduction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}