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
      { captain: "Long John Silver", ship: "Hispaniola", crew_size: 80, treasure_gold: 35000, years_active: 8, base_location: "Treasure Island", status: "Retired" }
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
      { colony_name: "Aurora City", system: "TRAPPIST-1", population: 1200000, established: 2167, primary_industry: "Manufacturing", gravity: 0.85, atmosphere: "Breathable", distance_from_earth: 39.5 }
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
      { company: "NeuroLink Dynamics", founded: 2022, employees: 67, funding_raised: 18000000, valuation: 95000000, industry: "Medical Tech", revenue_2024: 4700000, growth_rate: 280 }
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
      { station_id: "WS005", location: "Death Valley Center", country: "USA", avg_temp_c: 25.3, annual_rainfall_mm: 60, wind_speed_kmh: 11.8, elevation_m: -86 }
    ]
  }
];