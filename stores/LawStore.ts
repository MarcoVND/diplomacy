import { create } from "zustand";
import type { Law, LawState } from "@/types/law";

const MOCK_LAWS: Law[] = [
  {
    id: "1",
    name: "Civil Code",
    description: "General civil law governing personal and property rights",
    country: "United States",
    city: "New York",
    lastUpdated: "2024-01-15",
    articles: [
      {
        number: 1,
        title: "Definitions",
        content: "For the purposes of this Code, the following definitions shall apply...",
      },
      {
        number: 2,
        title: "Personal Rights",
        content: "Every person has certain inherent rights, including the right to life, liberty, and the pursuit of happiness...",
      },
      {
        number: 3,
        title: "Property Rights",
        content: "Property rights are fundamental rights that include the right to acquire, possess, and dispose of property...",
      },
    ],
  },
  {
    id: "2",
    name: "Criminal Code",
    description: "Laws defining crimes and their punishments",
    country: "United States",
    city: "New York",
    lastUpdated: "2024-02-01",
    articles: [
      {
        number: 1,
        title: "Offenses Against Persons",
        content: "A person commits an offense against another when...",
      },
      {
        number: 2,
        title: "Offenses Against Property",
        content: "Theft, robbery, and burglary are defined as follows...",
      },
    ],
  },
  {
    id: "3",
    name: "Labor Law",
    description: "Regulations governing employment relationships",
    country: "Spain",
    city: "Madrid",
    lastUpdated: "2024-03-10",
    articles: [
      {
        number: 1,
        title: "Employment Contract",
        content: "An employment contract shall be in writing and shall contain...",
      },
      {
        number: 2,
        title: "Working Hours",
        content: "The maximum ordinary working time shall not exceed...",
      },
    ],
  },
  {
    id: "4",
    name: "Commercial Code",
    description: "Laws governing commercial activities and businesses",
    country: "Mexico",
    city: "Mexico City",
    lastUpdated: "2024-01-20",
    articles: [
      {
        number: 1,
        title: "Merchant Definition",
        content: "For the purposes of this Code, a merchant is any person who...",
      },
    ],
  },
];

export const useLawStore = create<LawState>((set) => ({
  laws: MOCK_LAWS,
  selectedLaw: null,
  isLoading: false,
  error: null,

  setLaws: (laws: Law[]) => set(() => ({ laws })),

  selectLaw: (law: Law | null) => set(() => ({ selectedLaw: law })),

  setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),

  setError: (error: string | null) => set(() => ({ error })),

  clearLaws: () => set(() => ({ laws: [] })),
}));
