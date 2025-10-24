const config = {
  "property": {
    "streetAddress": "584 Jessup St",
    "city": "Prescott",
    "cityStateZip": "Prescott, ON K0E 1T0",
    "heroSubtitle": "Completely renovated 2-storey home on a quiet street with a huge kitchen island. Just a few blocks from the St. Lawrence River, close to shops and boat launch. Register to receive the complete property info package, virtual tour, floor plan, and comparables.",
    "listingPrice": "$449,900",
    "beds": "3",
    "baths": "1",
    "homeType": "2 Storey",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/e111598e534f50522d0ab64ddebd0f57235ff85fb34aff5c2b87c26d19fb0c88/GetMedia__1_.jpeg",
    "listingPhoto2": "https://api.typeform.com/responses/files/3b22d6ec8b8cc7888ee07f463b6b58aeaaf18782d738d135509d6b7f1eb12b4e/GetMedia.jpeg",
    "listingUrl": "https://www.realtor.ca/real-estate/29025239/584-jessup-street-prescott-808-prescott",
    "virtualTourUrl": "https://my.matterport.com/show/?m=VfvT3YUJeB8"
  },
  "realtor": {
    "fullName": "Trevor Beaudry",
    "email": "trevor@driscollpeca.com"
    
  },
  "brokerage": {
    "name": "",
    "logoUrl": "",
    "address": ""
  },
  "openHouse": {
    "eventDate": "2025-10-26",
    "bundleItems": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Architectural Floor Plan"
      },
      {
        "icon": "fas fa-star",
        "text": "Neighbourhood Guide"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "Market Stats"
      },
      {
        "icon": "fas fa-car",
        "text": "School District Information"
      },
      {
        "icon": "fas fa-key",
        "text": "Financing Resources"
      },
      {
        "icon": "fas fa-home",
        "text": "Utility Cost Estimates"
      },
      {
        "icon": "fas fa-map-location-dot",
        "text": "Property Feature List"
      },
      {
        "icon": "fas fa-image",
        "text": "Home Inspection Tips"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Trevor Beaudry Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": ""
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-254",
    "repoUrl": "https://github.com/arslvn93/Open-House-254",
    "tag": "Open House 584 Jessup St Prescott",
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse"
  }
};