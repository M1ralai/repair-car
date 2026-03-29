export interface ServiceCategory {
  id: string;
  name: string; // Motor, Elektrik, Lastik vb.
  iconName: string;
  description?: string;
}

export interface ProblemType {
  id: string;
  categoryId: string;
  title: string;
}
