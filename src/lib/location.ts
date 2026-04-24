import locationDataset from "@/data/bd-locations.json";
import type { DistrictNode, DivisionNode, UpazilaNode } from "@/types/location";

export const bangladeshLocations = locationDataset as DivisionNode[];

export function getDivisionOptions() {
  return bangladeshLocations.map((division) => division.name);
}

export function getDistrictOptions(divisionName?: string) {
  if (!divisionName) return [];

  return (
    bangladeshLocations.find((division) => division.name === divisionName)?.districts.map(
      (district: DistrictNode) => district.name,
    ) ?? []
  );
}

export function getUpazilaOptions(divisionName?: string, districtName?: string) {
  if (!divisionName || !districtName) return [];

  return (
    bangladeshLocations
      .find((division) => division.name === divisionName)
      ?.districts.find((district) => district.name === districtName)
      ?.upazilas.map((upazila: UpazilaNode) => upazila.name) ?? []
  );
}

export function getUnionOptions(
  divisionName?: string,
  districtName?: string,
  upazilaName?: string,
) {
  if (!divisionName || !districtName || !upazilaName) return [];

  return (
    bangladeshLocations
      .find((division) => division.name === divisionName)
      ?.districts.find((district) => district.name === districtName)
      ?.upazilas.find((upazila) => upazila.name === upazilaName)?.unions ?? []
  );
}
