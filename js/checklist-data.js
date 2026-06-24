const checklistData=[
  {
    "category": "PRE-ARRIVAL",
    "items": [
      {
        "id": 1,
        "text": "FOD Check completed"
      },
      {
        "id": 2,
        "text": "Parking clean and free from FOD"
      },
      {
        "id": 3,
        "text": "ERA clear of equipment"
      },
      {
        "id": 4,
        "text": "ERA clear of unauthorized personnel"
      },
      {
        "id": 5,
        "text": "Required equipment available and serviceable"
      },
      {
        "id": 6,
        "text": "LIR available | Ipad utilization"
      },
      {
        "id": 7,
        "text": "CPM available | | Ipad utilization"
      },
      {
        "id": 8,
        "text": "Team briefing completed"
      }
    ]
  },
  {
    "category": "ARRIVAL",
    "items": [
      {
        "id": 9,
        "text": "Arrival Walkaround completed (FOD) check"
      },
      {
        "id": 10,
        "text": "Aircraft exterior inspected for damage/scratch"
      },
      {
        "id": 11,
        "text": "Aircraft doors and frames inspected for damage/scratch"
      },
      {
        "id": 12,
        "text": "Cargo holds opened by Baggage Representative"
      },
      {
        "id": 13,
        "text": "Hold inspection completed"
      },
      {
        "id": 14,
        "text": "No visible damage identified"
      },
      {
        "id": 15,
        "text": "Chocks installed conveyor belt loader"
      },
      {
        "id": 16,
        "text": "Aircraft Safety Cones positioned"
      }
    ]
  },
  {
    "category": "GUIDE MAN REQUIREMENTS",
    "items": [
      {
        "id": 17,
        "text": "Passenger Stairs positioning"
      },
      {
        "id": 18,
        "text": "Passenger Stairs removal"
      },
      {
        "id": 19,
        "text": "Belt Loader positioning"
      },
      {
        "id": 20,
        "text": "Belt Loader removal"
      },
      {
        "id": 21,
        "text": "High Loader positioning"
      },
      {
        "id": 22,
        "text": "High Loader removal"
      },
      {
        "id": 23,
        "text": "High Loader platform lowering"
      },
      {
        "id": 24,
        "text": "Continuous visual contact maintained"
      },
      {
        "id": 25,
        "text": "Area below platform clear of personnel"
      },
      {
        "id": 26,
        "text": "Area below platform clear of equipment"
      }
    ]
  },
  {
    "category": "GSE SAFETY",
    "items": [
      {
        "id": 27,
        "text": "Brake Check completed before aircraft approach"
      },
      {
        "id": 28,
        "text": "Speed below 5 km/h"
      },
      {
        "id": 29,
        "text": "Parking Brake applied"
      },
      {
        "id": 30,
        "text": "No mobile phone use while operating equipment"
      },
      {
        "id": 31,
        "text": "Equipment serviceable"
      },
      {
        "id": 32,
        "text": "No Out of Service equipment in use"
      }
    ]
  },
  {
    "category": "BELT LOADER",
    "items": [
      {
        "id": 33,
        "text": "Guide Man available"
      },
      {
        "id": 34,
        "text": "Safety Rails raised"
      },
      {
        "id": 35,
        "text": "Control Panel Door closed and secured"
      },
      {
        "id": 36,
        "text": "No Touch Policy maintained"
      }
    ]
  },
  {
    "category": "HIGH LOADER",
    "items": [
      {
        "id": 37,
        "text": "Guide Man available"
      },
      {
        "id": 38,
        "text": "Control Panel Door closed and secured"
      },
      {
        "id": 39,
        "text": "No aircraft contact"
      },
      {
        "id": 40,
        "text": "Transporter/Dolly available before ULD movement"
      },
      {
        "id": 41,
        "text": "High Loader not moved while platform is elevated"
      },
      {
        "id": 42,
        "text": "Area below platform clear during lowering"
      }
    ]
  },
  {
    "category": "BAGGAGE REPRESENTATIVE",
    "items": [
      {
        "id": 43,
        "text": "FOD Check completed"
      },
      {
        "id": 44,
        "text": "Arrival Walkaround completed"
      },
      {
        "id": 45,
        "text": "LIR available"
      },
      {
        "id": 46,
        "text": "Loading performed as per LIR"
      },
      {
        "id": 47,
        "text": "DG requirements verified if applicable"
      },
      {
        "id": 48,
        "text": "Cargo holds opened by Baggage Representative"
      },
      {
        "id": 49,
        "text": "Cargo holds closed by Baggage Representative"
      },
      {
        "id": 50,
        "text": "Nets secured"
      },
      {
        "id": 51,
        "text": "Stops secured"
      },
      {
        "id": 52,
        "text": "Locks secured"
      }
    ]
  },
  {
    "category": "LOADING",
    "items": [
      {
        "id": 53,
        "text": "Loading matches LIR"
      },
      {
        "id": 54,
        "text": "ULD serviceable"
      },
      {
        "id": 55,
        "text": "ULD properly secured"
      },
      {
        "id": 56,
        "text": "Any deviation reported to Load Control"
      }
    ]
  },
  {
    "category": "DANGEROUS GOODS (DG)",
    "items": [
      {
        "id": 57,
        "text": "NOTOC available"
      },
      {
        "id": 58,
        "text": "No leakage identified"
      },
      {
        "id": 59,
        "text": "Shipment properly secured"
      },
      {
        "id": 60,
        "text": "DG-trained personnel assigned"
      }
    ]
  },
  {
    "category": "DEPARTURE",
    "items": [
      {
        "id": 61,
        "text": "Pre-Departure Walkaround completed"
      },
      {
        "id": 62,
        "text": "All equipment removed"
      },
      {
        "id": 63,
        "text": "Cones removed"
      },
      {
        "id": 64,
        "text": "Chocks removed"
      },
      {
        "id": 65,
        "text": "All aircraft doors closed"
      },
      {
        "id": 66,
        "text": "Area clear of FOD"
      },
      {
        "id": 67,
        "text": "Headset Operator available"
      },
      {
        "id": 68,
        "text": "Towbar serviceable"
      },
      {
        "id": 69,
        "text": "Shear Pin serviceable"
      },
      {
        "id": 70,
        "text": "Pushback briefing completed"
      }
    ]
  },
  {
    "category": "FLIGHT DOCUMENTATION",
    "items": [
      {
        "id": 71,
        "text": "LIR"
      },
      {
        "id": 72,
        "text": "CPM"
      },
      {
        "id": 73,
        "text": "LDM"
      },
      {
        "id": 74,
        "text": "NOTOC"
      },
      {
        "id": 75,
        "text": "BSD"
      },
      {
        "id": 76,
        "text": "Loadsheet"
      },
      {
        "id": 77,
        "text": "Fuel Docket"
      },
      {
        "id": 78,
        "text": "OFP"
      }
    ]
  },
  {
    "category": "IMMEDIATE FAILURE ITEMS",
    "items": [
      {
        "id": 79,
        "text": "Employee without PPE"
      },
      {
        "id": 80,
        "text": "No FOD Check"
      },
      {
        "id": 81,
        "text": "No Arrival Walkaround"
      },
      {
        "id": 82,
        "text": "No Departure Walkaround"
      },
      {
        "id": 83,
        "text": "No LIR"
      },
      {
        "id": 84,
        "text": "No Guide Man where required"
      },
      {
        "id": 85,
        "text": "Control Panel Door left open during equipment movement"
      },
      {
        "id": 86,
        "text": "Aircraft contact by GSE"
      },
      {
        "id": 87,
        "text": "Loading not in accordance with LIR"
      },
      {
        "id": 88,
        "text": "DG non-compliance"
      },
      {
        "id": 89,
        "text": "Nets Stops or Locks not secured"
      },
      {
        "id": 90,
        "text": "Unauthorized aircraft door operation"
      }
    ]
  }
];