export interface UserInput {
  salary: number;
  rentalIncome: number;
  businessIncome: number;
  capitalGains: number;
  interestIncome: number;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  options?: string[];
}

export interface ITRRecommendation {
  form: string;
  explanation: string;
}

export interface InvestmentSuggestion {
  type: string;
  description: string;
  maxDeduction: string;
  section: string;
}