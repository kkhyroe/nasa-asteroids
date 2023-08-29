export type Measure = "km" | "lunar";

export type Asteroid = {
  id: string;
  name: string;
  // absolute_magnitude_h: number;
  is_potentially_hazardous_asteroid: boolean;
  // is_sentry_object: boolean;
  // neo_reference_id: string;
  // nasa_jpl_url: string;
  // links: {
  //   self: string;
  // };
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number;
    };
  };
  close_approach_data: {
    // close_approach_date: string;
    // close_approach_date_full: string;
    // epoch_date_close_approach: number;
    // orbiting_body: string;
    miss_distance: {
      kilometers: string;
      lunar: string;
    };
  }[];
};

export type FeedData = {
  element_count: number;
  links: {
    next: string;
    previous: string;
    self: string;
  };
  near_earth_objects: {
    [date: string]: Asteroid[];
  };
};
