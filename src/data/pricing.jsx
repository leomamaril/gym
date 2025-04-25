import { Link } from "react-router-dom";
export const plans = [
    {
      name: "Basic Plan",
      price: "₱850",
      description: "Perfect for those just starting their fitness journey",
      features: [
        "Access to gym facilities",
        "Standard equipment usage",
        "Nutrition Tracking",
        "3x Free Supplement",
        "5 Days per week",
        "1 Free Group Class per Month"
      ],
      button: <Link to='/contact' className="btn-gymfit-outline font-btn bebas w-100 d-block">Inquire Now</Link>
 
    },
    {
      name: "Standard Plan",
      price: "₱1250",
      description: "Ideal for individuals looking to elevate their routine",
      features: [
        "Full access to gym facilities",
        "Standard equipment usage",
        "Nutrition Tracking",
        "4x Free Supplement",
        "5 Days per week",
        "4 Free Group Class per Month"
      ],
      button: <Link to='/contact' className="btn-gymfit-primary font-btn bebas w-100 d-block">Inquire Now</Link>
    },
    {
      name: "PREMIUM Plan",
      price: "₱1500",
      description: "Perfect for those who want the ultimate fitness experience",
      features: [
        "Access to gym facilities",
        "Standard equipment usage",
        "Nutrition Tracking",
        "3x Free Supplement",
        "5 Days per week",
        "8 Free Group Class per Month"
      ],
      button: <Link to='/contact' className="btn-gymfit-outline font-btn bebas w-100 d-block">Inquire Now</Link>
    }
  ];