import { PropertyPageTemplate } from "../PropertyPageTemplate";
import { getProperty } from "@/lib/properties";
export function SunsetVinePenthousePage() { return <PropertyPageTemplate property={getProperty("sunset-vine-penthouse")!} />; }
