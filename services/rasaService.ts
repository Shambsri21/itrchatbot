import axios from 'axios';
import { ChatMessage, ITRRecommendation } from '../types';

const RASA_API_URL = 'http://localhost:5005';  // Update with your Rasa server URL

export async function sendMessage(message: string): Promise<{
  botResponse: ChatMessage;
  itrRecommendation?: ITRRecommendation;
}> {
  try {
    const response = await axios.post(`${RASA_API_URL}/webhooks/rest/webhook`, {
      sender: 'user',
      message: message
    });

    const botMessage = response.data[0];
    let itrRecommendation: ITRRecommendation | undefined;

    // Parse custom payload for ITR recommendation if present
    if (botMessage.custom && botMessage.custom.itr_recommendation) {
      itrRecommendation = {
        form: botMessage.custom.itr_recommendation.form,
        explanation: botMessage.custom.itr_recommendation.explanation
      };
    }

    return {
      botResponse: {
        id: Date.now().toString(),
        type: 'bot',
        content: botMessage.text,
        options: botMessage.buttons?.map((button: any) => button.title) || undefined
      },
      itrRecommendation
    };
  } catch (error) {
    console.error('Error communicating with Rasa:', error);
    return {
      botResponse: {
        id: Date.now().toString(),
        type: 'bot',
        content: 'I apologize, but I\'m having trouble processing your request right now. Please try again later.'
      }
    };
  }
}

