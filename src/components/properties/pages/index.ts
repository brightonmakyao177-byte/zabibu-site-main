import { ZabibuBeachVillaPage } from "./ZabibuBeachVillaPage";
import { GrapeHouseStoneTownPage } from "./GrapeHouseStoneTownPage";
import { VineHillSafariLodgePage } from "./VineHillSafariLodgePage";
import { CoralGardenApartmentsPage } from "./CoralGardenApartmentsPage";
import { MountainVineRetreatPage } from "./MountainVineRetreatPage";
import { TheClusterPajePage } from "./TheClusterPajePage";
import { SunsetVinePenthousePage } from "./SunsetVinePenthousePage";

export const propertyPages = {
  "zabibu-beach-villa": ZabibuBeachVillaPage,
  "grape-house-stone-town": GrapeHouseStoneTownPage,
  "vine-hill-safari-lodge": VineHillSafariLodgePage,
  "coral-garden-apartments": CoralGardenApartmentsPage,
  "mountain-vine-retreat": MountainVineRetreatPage,
  "the-cluster-paje": TheClusterPajePage,
  "sunset-vine-penthouse": SunsetVinePenthousePage,
} as const;
