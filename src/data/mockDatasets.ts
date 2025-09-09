export interface Dataset {
  id: string;
  name: string;
  description: string;
  data: Record<string, any>[];
  tags: string[];
}

export const mockDatasets: Dataset[] = [
  {
    id: "pirates",
    name: "Pirate Crews & Treasures",
    description: "Notorious pirate captains and their accumulated wealth across the seven seas",
    tags: ["Adventure", "Historical", "Finance"],
    data: [
      { captain: "Blackbeard", ship: "Queen Anne's Revenge", crew_size: 300, treasure_gold: 50000, years_active: 4, base_location: "Caribbean", status: "Deceased" },
      { captain: "Anne Bonny", ship: "Ranger", crew_size: 45, treasure_gold: 12000, years_active: 2, base_location: "Nassau", status: "Disappeared" },
      { captain: "Captain Kidd", ship: "Adventure Galley", crew_size: 150, treasure_gold: 75000, years_active: 6, base_location: "Madagascar", status: "Executed" },
      { captain: "Black Bart", ship: "Royal Fortune", crew_size: 400, treasure_gold: 120000, years_active: 4, base_location: "West Africa", status: "Deceased" },
      { captain: "Calico Jack", ship: "William", crew_size: 25, treasure_gold: 8000, years_active: 3, base_location: "Caribbean", status: "Executed" },
      { captain: "Henry Morgan", ship: "Satisfaction", crew_size: 500, treasure_gold: 200000, years_active: 15, base_location: "Port Royal", status: "Knighted" },
      { captain: "Mary Read", ship: "Ranger", crew_size: 45, treasure_gold: 12000, years_active: 2, base_location: "Caribbean", status: "Disease" },
      { captain: "Long John Silver", ship: "Hispaniola", crew_size: 80, treasure_gold: 35000, years_active: 8, base_location: "Treasure Island", status: "Retired" },
      { captain: "Red Beard Roger", ship: "Crimson Terror", crew_size: 220, treasure_gold: 95000, years_active: 7, base_location: "Tortuga", status: "Deceased" },
      { captain: "Iron Hook Jake", ship: "Sea Demon", crew_size: 180, treasure_gold: 42000, years_active: 5, base_location: "Port Royal", status: "Imprisoned" },
      { captain: "Storm Eye Sally", ship: "Thunder Wave", crew_size: 85, treasure_gold: 28000, years_active: 3, base_location: "Bahamas", status: "Active" },
      { captain: "Silver Tooth Tom", ship: "Moon Ripper", crew_size: 160, treasure_gold: 67000, years_active: 9, base_location: "Madagascar", status: "Retired" },
      { captain: "Bloody Mary", ship: "Death's Dance", crew_size: 95, treasure_gold: 31000, years_active: 4, base_location: "Caribbean", status: "Executed" },
      { captain: "Ghost Walker Will", ship: "Phantom's Revenge", crew_size: 120, treasure_gold: 54000, years_active: 6, base_location: "Barbados", status: "Disappeared" },
      { captain: "Mad Dog Murphy", ship: "Rabid Wolf", crew_size: 75, treasure_gold: 23000, years_active: 2, base_location: "Nassau", status: "Disease" },
      { captain: "Eagle Eye Emma", ship: "Sky Piercer", crew_size: 110, treasure_gold: 39000, years_active: 5, base_location: "Jamaica", status: "Active" },
      { captain: "Thunder Jack", ship: "Lightning Strike", crew_size: 200, treasure_gold: 88000, years_active: 8, base_location: "Tortuga", status: "Deceased" },
      { captain: "Scarface Pete", ship: "Bloody Maiden", crew_size: 65, treasure_gold: 19000, years_active: 3, base_location: "Port Royal", status: "Executed" },
      { captain: "One-Leg Ollie", ship: "Wooden Fury", crew_size: 55, treasure_gold: 16000, years_active: 4, base_location: "Caribbean", status: "Retired" }
    ]
  },
  {
    id: "space_colonies",
    name: "Galactic Colonies Census",
    description: "Population and infrastructure data from human settlements across the galaxy",
    tags: ["Sci-Fi", "Demographics", "Space"],
    data: [
      { colony_name: "New Terra", system: "Alpha Centauri", population: 2500000, established: 2157, primary_industry: "Agriculture", gravity: 0.98, atmosphere: "Breathable", distance_from_earth: 4.3 },
      { colony_name: "Olympus Base", system: "Wolf 359", population: 45000, established: 2203, primary_industry: "Mining", gravity: 0.61, atmosphere: "Domed", distance_from_earth: 7.9 },
      { colony_name: "Haven Station", system: "Proxima Centauri", population: 890000, established: 2145, primary_industry: "Trade Hub", gravity: 1.15, atmosphere: "Breathable", distance_from_earth: 4.2 },
      { colony_name: "Red Sands", system: "Kepler-452", population: 150000, established: 2189, primary_industry: "Research", gravity: 1.63, atmosphere: "Filtered", distance_from_earth: 1402 },
      { colony_name: "Crystal Point", system: "Gliese 667C", population: 75000, established: 2198, primary_industry: "Energy", gravity: 1.02, atmosphere: "Breathable", distance_from_earth: 23.6 },
      { colony_name: "Aurora City", system: "TRAPPIST-1", population: 1200000, established: 2167, primary_industry: "Manufacturing", gravity: 0.85, atmosphere: "Breathable", distance_from_earth: 39.5 },
      { colony_name: "Titan Outpost", system: "Barnard's Star", population: 32000, established: 2211, primary_industry: "Mining", gravity: 0.43, atmosphere: "Pressurized", distance_from_earth: 5.9 },
      { colony_name: "Genesis Prime", system: "Ross 128", population: 680000, established: 2178, primary_industry: "Biotechnology", gravity: 1.08, atmosphere: "Breathable", distance_from_earth: 11.0 },
      { colony_name: "Frontier Base", system: "LHS 1140", population: 98000, established: 2195, primary_industry: "Military", gravity: 1.43, atmosphere: "Filtered", distance_from_earth: 40.7 },
      { colony_name: "Paradise Valley", system: "K2-18", population: 450000, established: 2183, primary_industry: "Tourism", gravity: 0.89, atmosphere: "Breathable", distance_from_earth: 124 },
      { colony_name: "New Shanghai", system: "TOI-715", population: 1800000, established: 2156, primary_industry: "Trade Hub", gravity: 1.12, atmosphere: "Breathable", distance_from_earth: 137 },
      { colony_name: "Quantum Labs", system: "HD 40307", population: 125000, established: 2201, primary_industry: "Research", gravity: 0.77, atmosphere: "Controlled", distance_from_earth: 42 },
      { colony_name: "Steel Harbor", system: "Gliese 832", population: 350000, established: 2174, primary_industry: "Manufacturing", gravity: 1.33, atmosphere: "Industrial", distance_from_earth: 16.1 },
      { colony_name: "Nomad Station", system: "Proxima b", population: 78000, established: 2206, primary_industry: "Exploration", gravity: 1.17, atmosphere: "Habitat Pods", distance_from_earth: 4.2 },
      { colony_name: "Eclipse City", system: "Kepler-442b", population: 290000, established: 2187, primary_industry: "Energy", gravity: 1.34, atmosphere: "Breathable", distance_from_earth: 1206 }
    ]
  },
  {
    id: "medieval_kingdoms",
    name: "Medieval Kingdoms Database",
    description: "Political and economic data from European kingdoms during the Middle Ages",
    tags: ["Historical", "Politics", "Medieval"],
    data: [
      { kingdom: "England", capital: "London", population: 3200000, army_size: 25000, gold_reserves: 850000, trade_routes: 15, stability: "High", religion: "Christianity" },
      { kingdom: "France", capital: "Paris", population: 4100000, army_size: 35000, gold_reserves: 1200000, trade_routes: 22, stability: "Medium", religion: "Christianity" },
      { kingdom: "Holy Roman Empire", capital: "Aachen", population: 5800000, army_size: 45000, gold_reserves: 950000, trade_routes: 28, stability: "Low", religion: "Christianity" },
      { kingdom: "Scotland", capital: "Edinburgh", population: 800000, army_size: 12000, gold_reserves: 180000, trade_routes: 8, stability: "Medium", religion: "Christianity" },
      { kingdom: "Poland", capital: "Krakow", population: 1900000, army_size: 18000, gold_reserves: 320000, trade_routes: 12, stability: "High", religion: "Christianity" },
      { kingdom: "Denmark", capital: "Roskilde", population: 600000, army_size: 8000, gold_reserves: 150000, trade_routes: 18, stability: "High", religion: "Christianity" },
      { kingdom: "Hungary", capital: "Buda", population: 1200000, army_size: 15000, gold_reserves: 280000, trade_routes: 14, stability: "Medium", religion: "Christianity" }
    ]
  },
  {
    id: "mythical_creatures",
    name: "Mythical Creatures Bestiary",
    description: "Documented sightings and characteristics of legendary creatures worldwide",
    tags: ["Fantasy", "Mythology", "Biology"],
    data: [
      { creature: "Dragon", region: "European Alps", size: "Colossal", danger_level: 10, intelligence: "High", element: "Fire", last_sighting: "1547", witness_credibility: 7 },
      { creature: "Phoenix", region: "Arabian Desert", size: "Large", danger_level: 3, intelligence: "High", element: "Fire", last_sighting: "1823", witness_credibility: 8 },
      { creature: "Kraken", region: "North Atlantic", size: "Gigantic", danger_level: 9, intelligence: "Medium", element: "Water", last_sighting: "1952", witness_credibility: 6 },
      { creature: "Unicorn", region: "Scottish Highlands", size: "Medium", danger_level: 1, intelligence: "High", element: "Light", last_sighting: "1734", witness_credibility: 5 },
      { creature: "Griffin", region: "Himalayan Peaks", size: "Large", danger_level: 7, intelligence: "Medium", element: "Air", last_sighting: "1889", witness_credibility: 7 },
      { creature: "Basilisk", region: "Romanian Caves", size: "Medium", danger_level: 8, intelligence: "Low", element: "Poison", last_sighting: "1623", witness_credibility: 6 },
      { creature: "Thunderbird", region: "North American Plains", size: "Huge", danger_level: 6, intelligence: "Medium", element: "Lightning", last_sighting: "1967", witness_credibility: 9 }
    ]
  },
  {
    id: "tech_startups",
    name: "Tech Startup Metrics 2024",
    description: "Performance metrics and funding data for emerging technology companies",
    tags: ["Business", "Technology", "Finance"],
    data: [
      { company: "QuantumLeap AI", founded: 2022, employees: 45, funding_raised: 12500000, valuation: 85000000, industry: "Artificial Intelligence", revenue_2024: 3200000, growth_rate: 340 },
      { company: "BioSynth Labs", founded: 2021, employees: 78, funding_raised: 25000000, valuation: 150000000, industry: "Biotechnology", revenue_2024: 8900000, growth_rate: 210 },
      { company: "CyberShield Pro", founded: 2023, employees: 32, funding_raised: 8000000, valuation: 45000000, industry: "Cybersecurity", revenue_2024: 1800000, growth_rate: 890 },
      { company: "GreenEnergy Plus", founded: 2020, employees: 120, funding_raised: 45000000, valuation: 320000000, industry: "Clean Energy", revenue_2024: 22000000, growth_rate: 85 },
      { company: "SpaceLogistics Co", founded: 2019, employees: 95, funding_raised: 35000000, valuation: 280000000, industry: "Aerospace", revenue_2024: 18500000, growth_rate: 125 },
      { company: "NeuroLink Dynamics", founded: 2022, employees: 67, funding_raised: 18000000, valuation: 95000000, industry: "Medical Tech", revenue_2024: 4700000, growth_rate: 280 },
      { company: "CloudVault Systems", founded: 2021, employees: 89, funding_raised: 22000000, valuation: 140000000, industry: "Cloud Storage", revenue_2024: 12300000, growth_rate: 195 },
      { company: "RoboTech Industries", founded: 2020, employees: 156, funding_raised: 38000000, valuation: 250000000, industry: "Robotics", revenue_2024: 15800000, growth_rate: 167 },
      { company: "DataFlow Analytics", founded: 2023, employees: 28, funding_raised: 6500000, valuation: 35000000, industry: "Data Analytics", revenue_2024: 950000, growth_rate: 720 },
      { company: "VirtReality Pro", founded: 2022, employees: 54, funding_raised: 14000000, valuation: 75000000, industry: "Virtual Reality", revenue_2024: 2800000, growth_rate: 420 },
      { company: "AutoDrive Tech", founded: 2019, employees: 203, funding_raised: 85000000, valuation: 580000000, industry: "Autonomous Vehicles", revenue_2024: 45000000, growth_rate: 98 },
      { company: "FoodTech Innovations", founded: 2021, employees: 72, funding_raised: 19500000, valuation: 110000000, industry: "Food Technology", revenue_2024: 6200000, growth_rate: 245 },
      { company: "FinanceAI Corp", founded: 2020, employees: 134, funding_raised: 42000000, valuation: 290000000, industry: "Financial Technology", revenue_2024: 28500000, growth_rate: 156 },
      { company: "HealthMonitor Plus", founded: 2022, employees: 41, funding_raised: 11000000, valuation: 62000000, industry: "Health Tech", revenue_2024: 2100000, growth_rate: 380 },
      { company: "EcoMaterials Lab", founded: 2021, employees: 63, funding_raised: 16800000, valuation: 95000000, industry: "Sustainable Materials", revenue_2024: 4900000, growth_rate: 290 },
      { company: "CryptoSecure Solutions", founded: 2023, employees: 35, funding_raised: 9200000, valuation: 48000000, industry: "Blockchain Security", revenue_2024: 1400000, growth_rate: 650 },
      { company: "SmartHome Dynamics", founded: 2020, employees: 98, funding_raised: 28000000, valuation: 185000000, industry: "IoT", revenue_2024: 13700000, growth_rate: 178 },
      { company: "SpaceMining Corp", founded: 2019, employees: 187, funding_raised: 75000000, valuation: 520000000, industry: "Space Technology", revenue_2024: 32000000, growth_rate: 89 },
      { company: "GenTherapy Advances", founded: 2021, employees: 85, funding_raised: 31000000, valuation: 190000000, industry: "Gene Therapy", revenue_2024: 7800000, growth_rate: 265 },
      { company: "QuantumCompute Systems", founded: 2020, employees: 112, funding_raised: 55000000, valuation: 380000000, industry: "Quantum Computing", revenue_2024: 19200000, growth_rate: 142 },
      { company: "OceanTech Solutions", founded: 2022, employees: 46, funding_raised: 13500000, valuation: 72000000, industry: "Marine Technology", revenue_2024: 2600000, growth_rate: 410 },
      { company: "SolarCell Innovations", founded: 2021, employees: 76, funding_raised: 21000000, valuation: 125000000, industry: "Solar Energy", revenue_2024: 8900000, growth_rate: 220 },
      { company: "NanoMed Research", founded: 2023, employees: 29, funding_raised: 7800000, valuation: 42000000, industry: "Nanotechnology", revenue_2024: 1100000, growth_rate: 780 },
      { company: "AgriDrone Systems", founded: 2020, employees: 91, funding_raised: 24500000, valuation: 160000000, industry: "Agricultural Technology", revenue_2024: 11200000, growth_rate: 185 },
      { company: "BrainWave Technologies", founded: 2022, employees: 58, funding_raised: 15800000, valuation: 88000000, industry: "Neurotechnology", revenue_2024: 3400000, growth_rate: 350 },
      { company: "CleanWater Innovations", founded: 2021, employees: 67, funding_raised: 18200000, valuation: 105000000, industry: "Water Technology", revenue_2024: 5600000, growth_rate: 275 },
      { company: "AIVision Systems", founded: 2023, employees: 38, funding_raised: 10500000, valuation: 55000000, industry: "Computer Vision", revenue_2024: 1700000, growth_rate: 620 },
      { company: "EnergyStorage Pro", founded: 2020, employees: 104, funding_raised: 32000000, valuation: 210000000, industry: "Battery Technology", revenue_2024: 16800000, growth_rate: 148 },
      { company: "TeleHealth Connect", founded: 2021, employees: 82, funding_raised: 23500000, valuation: 145000000, industry: "Telemedicine", revenue_2024: 9400000, growth_rate: 230 },
      { company: "SmartGrid Solutions", founded: 2022, employees: 71, funding_raised: 20000000, valuation: 118000000, industry: "Energy Management", revenue_2024: 6800000, growth_rate: 310 },
      { company: "BioFuel Dynamics", founded: 2020, employees: 125, funding_raised: 39000000, valuation: 270000000, industry: "Biofuel Technology", revenue_2024: 21500000, growth_rate: 134 }
    ]
  },
  {
    id: "weather_stations",
    name: "Global Weather Station Data",
    description: "Climate measurements from weather monitoring stations around the world",
    tags: ["Weather", "Science", "Geography"],
    data: [
      { station_id: "WS001", location: "Reykjavik", country: "Iceland", avg_temp_c: 4.2, annual_rainfall_mm: 798, wind_speed_kmh: 18.5, elevation_m: 56 },
      { station_id: "WS002", location: "Sahara Research Base", country: "Algeria", avg_temp_c: 29.8, annual_rainfall_mm: 12, wind_speed_kmh: 12.3, elevation_m: 378 },
      { station_id: "WS003", location: "Amazon Station Alpha", country: "Brazil", avg_temp_c: 26.1, annual_rainfall_mm: 2847, wind_speed_kmh: 8.7, elevation_m: 124 },
      { station_id: "WS004", location: "Mount Everest Base", country: "Nepal", avg_temp_c: -6.4, annual_rainfall_mm: 467, wind_speed_kmh: 45.2, elevation_m: 5364 },
      { station_id: "WS005", location: "Death Valley Center", country: "USA", avg_temp_c: 25.3, annual_rainfall_mm: 60, wind_speed_kmh: 11.8, elevation_m: -86 },
      { station_id: "WS006", location: "Antarctic Research", country: "Antarctica", avg_temp_c: -18.7, annual_rainfall_mm: 166, wind_speed_kmh: 28.4, elevation_m: 2835 },
      { station_id: "WS007", location: "Mumbai Monsoon", country: "India", avg_temp_c: 27.2, annual_rainfall_mm: 2213, wind_speed_kmh: 15.6, elevation_m: 14 },
      { station_id: "WS008", location: "Siberian Outpost", country: "Russia", avg_temp_c: -12.1, annual_rainfall_mm: 341, wind_speed_kmh: 22.1, elevation_m: 456 },
      { station_id: "WS009", location: "Australian Outback", country: "Australia", avg_temp_c: 24.8, annual_rainfall_mm: 287, wind_speed_kmh: 14.2, elevation_m: 298 },
      { station_id: "WS010", location: "Norwegian Fjords", country: "Norway", avg_temp_c: 6.1, annual_rainfall_mm: 1456, wind_speed_kmh: 19.8, elevation_m: 234 },
      { station_id: "WS011", location: "Atacama Desert", country: "Chile", avg_temp_c: 18.4, annual_rainfall_mm: 0.8, wind_speed_kmh: 13.7, elevation_m: 2408 },
      { station_id: "WS012", location: "Greenland Ice Sheet", country: "Greenland", avg_temp_c: -15.3, annual_rainfall_mm: 312, wind_speed_kmh: 31.5, elevation_m: 2134 }
    ]
  }
];