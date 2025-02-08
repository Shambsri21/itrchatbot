from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionRecommendITRForm(Action):
    def name(self) -> Text:
        return "action_recommend_itr_form"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        # Identify user's income type from intents
        latest_intent = tracker.latest_message.get('intent', {}).get('name')
        
        # Match intents to ITR forms
        if latest_intent == "provide_income_salary":
            form = "ITR-1 (Sahaj)"
            explanation = (
                "ITR-1 is most suitable for individuals with salary income, "
                "income from one house property, and interest income."
            )
        elif latest_intent == "provide_income_business":
            form = "ITR-3"
            explanation = (
                "ITR-3 is appropriate for individuals or HUFs having income "
                "from business or profession."
            )
        elif latest_intent == "provide_income_rental":
            form = "ITR-2"
            explanation = (
                "ITR-2 is for individuals earning from rental properties "
                "and other sources."
            )
        else:
            form = "ITR-1 (Sahaj)"
            explanation = (
                "Based on limited details, ITR-1 is recommended. "
                "Provide more information for accurate advice."
            )
        
        # Respond with ITR recommendation
        dispatcher.utter_message(
            text=f"I recommend using {form}. {explanation}",
            custom={
                "itr_recommendation": {
                    "form": form,
                    "explanation": explanation
                }
            }
        )
        return []


class ActionSuggestInvestments(Action):
    def name(self) -> Text:
        return "action_suggest_investments"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        # Provide tax-saving investment suggestions
        message = (
            "Here are some tax-saving investments:\n"
            "1. PPF (Public Provident Fund) - Section 80C, up to ₹1.5 Lakh.\n"
            "2. ELSS (Equity Linked Savings Scheme) - Section 80C, lock-in of 3 years.\n"
            "3. NPS (National Pension Scheme) - Section 80CCD(1B), up to ₹50,000.\n"
        )
        
        dispatcher.utter_message(text=message)
        return []
