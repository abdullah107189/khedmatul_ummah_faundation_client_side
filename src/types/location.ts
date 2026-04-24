export interface UpazilaNode {
  name: string;
  unions: string[];
}

export interface DistrictNode {
  name: string;
  upazilas: UpazilaNode[];
}

export interface DivisionNode {
  name: string;
  districts: DistrictNode[];
}
