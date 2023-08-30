export type Measure = "km" | "lunar";

export type ApproachData = {
  close_approach_date: string;
  close_approach_date_full: string;
  relative_velocity: {
    // kilometers_per_second: string;
    kilometers_per_hour: string;
  };
  orbiting_body: string;
  miss_distance: {
    kilometers: string;
    lunar: string;
  };
};

export type AsteroidData = {
  id: string;
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number;
    };
  };
  close_approach_data: ApproachData[];
};

export type FeedData = {
  element_count: number;
  links: {
    next: string;
    previous: string;
    self: string;
  };
  near_earth_objects: {
    [date: string]: AsteroidData[];
  };
};
