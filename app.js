import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/jpeg;base64,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" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  // console.log("props info:", props?.resData[0].info.name)
  // console.log(RestaurantCard )
  const { resData } = props;

  const {cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } =resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img className="res-logo"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3> 
      <h3>{avgRating}stars</h3>
      <h4>{costForTwo/100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

//media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv" + cloudinaryImageId} 




const resObj = [
  
  {
    "info": {
      "id": "25620",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Intermediate Ring Road",
      "areaName": "Ejipura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹549",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "375041",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "byilgyrcfz690ryoasww",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.4,
      "parentId": "10496",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "12 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50467",
      "name": "Bakingo",
      "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "3818",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "140887",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "Mantri Avenue",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108424",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
      "locality": "5TH Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 00:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            "shortDescription": "Kids Favourite options",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41913",
      "name": "Chinita Real Mexican Food",
      "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹750 for two",
      "cuisines": [
        "Mexican",
        "Salads",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "5064",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            "shortDescription": "Kids Favourite options",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "158855",
      "name": "Candice's Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Continental",
        "American",
        "Salads",
        "Desserts",
        "Beverages",
        "Healthy Food"
      ],
      "avgRating": 4.5,
      "parentId": "465403",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "38634",
      "name": "Third Wave Coffee",
      "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "274773",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/third-wave-coffee-koramangala-bangalore-38634",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "371281",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "425",
      "name": "Hotel Empire",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "475",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.4,
      "parentId": "21400",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "209557",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "JNC College Road",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "63007",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
      "locality": "Jakkasandra",
      "areaName": "Hsr Layout 5th Sector",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "4925",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-jakkasandra-hsr-layout-5th-sector-bangalore-63007",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "19563",
      "name": "The Bowl Company",
      "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
      "locality": "Jakkasandra",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pan-Asian",
        "Continental",
        "North Indian",
        "Desserts",
        "American",
        "Asian",
        "Beverages",
        "Biryani",
        "Chinese",
        "European",
        "Grill",
        "Hyderabadi",
        "Indian",
        "Italian",
        "Kebabs",
        "Lucknowi",
        "Mediterranean",
        "Mexican",
        "Mughlai",
        "Oriental",
        "Pastas",
        "Punjabi",
        "Raja"
      ],
      "avgRating": 4.4,
      "parentId": "4317",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-bowl-company-jakkasandra-koramangala-bangalore-19563",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "305",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxydb9wvkadarapno4hk",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10820",
      "name": "California Burrito",
      "cloudinaryImageId": "b58sysfvskincfwmgoqd",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food"
      ],
      "avgRating": 4.6,
      "parentId": "1252",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "272239",
      "name": "EatFit",
      "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "76139",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-6th-block-koramangala-bangalore-272239",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50842",
      "name": "CakeZone",
      "cloudinaryImageId": "12ee141ef81c0312fa91cf9ef4b6733b",
      "locality": "KORAMANGLA",
      "areaName": "6th Block",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "7003",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-koramangla-6th-block-bangalore-50842",
      "type": "WEBLINK"
    }
  }



];


const resList = [
  {
    "info": {
      "id": "25620",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Intermediate Ring Road",
      "areaName": "Ejipura",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹549",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "375041",
      "name": "Andhra Gunpowder",
      "cloudinaryImageId": "byilgyrcfz690ryoasww",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Andhra",
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.4,
      "parentId": "10496",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "12 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50467",
      "name": "Bakingo",
      "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "3818",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "140887",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "Mantri Avenue",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 05:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108424",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
      "locality": "5TH Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 00:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            "shortDescription": "Kids Favourite options",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41913",
      "name": "Chinita Real Mexican Food",
      "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹750 for two",
      "cuisines": [
        "Mexican",
        "Salads",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "5064",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            "shortDescription": "Kids Favourite options",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "shortDescription": "Kids Favourite options"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "158855",
      "name": "Candice's Gourmet Sandwiches & Wraps",
      "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Continental",
        "American",
        "Salads",
        "Desserts",
        "Beverages",
        "Healthy Food"
      ],
      "avgRating": 4.5,
      "parentId": "465403",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "38634",
      "name": "Third Wave Coffee",
      "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "274773",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/third-wave-coffee-koramangala-bangalore-38634",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "371281",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "425",
      "name": "Hotel Empire",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "475",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "108097",
      "name": "Ambur Star Briyani Since 1890",
      "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
      "locality": "2nd Stage",
      "areaName": "BTM Layout",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Chettinad",
        "Andhra",
        "Beverages",
        "Seafood"
      ],
      "avgRating": 4.4,
      "parentId": "21400",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "209557",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "JNC College Road",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "63007",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
      "locality": "Jakkasandra",
      "areaName": "Hsr Layout 5th Sector",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "4925",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-jakkasandra-hsr-layout-5th-sector-bangalore-63007",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "19563",
      "name": "The Bowl Company",
      "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
      "locality": "Jakkasandra",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pan-Asian",
        "Continental",
        "North Indian",
        "Desserts",
        "American",
        "Asian",
        "Beverages",
        "Biryani",
        "Chinese",
        "European",
        "Grill",
        "Hyderabadi",
        "Indian",
        "Italian",
        "Kebabs",
        "Lucknowi",
        "Mediterranean",
        "Mexican",
        "Mughlai",
        "Oriental",
        "Pastas",
        "Punjabi",
        "Raja"
      ],
      "avgRating": 4.4,
      "parentId": "4317",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹110"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-bowl-company-jakkasandra-koramangala-bangalore-19563",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "305",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxydb9wvkadarapno4hk",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "10820",
      "name": "California Burrito",
      "cloudinaryImageId": "b58sysfvskincfwmgoqd",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food"
      ],
      "avgRating": 4.6,
      "parentId": "1252",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-27 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "272239",
      "name": "EatFit",
      "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "76139",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "brand",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-6th-block-koramangala-bangalore-272239",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "50842",
      "name": "CakeZone",
      "cloudinaryImageId": "12ee141ef81c0312fa91cf9ef4b6733b",
      "locality": "KORAMANGLA",
      "areaName": "6th Block",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "7003",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-26 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-koramangla-6th-block-bangalore-50842",
      "type": "WEBLINK"
    }
  }


];
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//not using  keys (not acceptable)
const Body = () => {
  // console.log("resObj", resObj)
  // console.log(RestaurantCard )
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {
          resList?.map((restaurant)=>{
            return <RestaurantCard  key={restaurant?.info?.id}resData={restaurant}/>
          })
        }
      </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)