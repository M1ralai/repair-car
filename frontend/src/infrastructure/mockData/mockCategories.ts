import type { ServiceCategory, ProblemType } from '../../core/domain/types/category';

export const mockCategories: ServiceCategory[] = [
  { id: 'cat_1', name: 'Motor', iconName: 'engine', description: 'Motor arızaları ve onarımı' },
  { id: 'cat_2', name: 'Elektrik', iconName: 'battery', description: 'Akü, far, elektrik tesisatı' },
  { id: 'cat_3', name: 'Lastik', iconName: 'tire', description: 'Lastik patlaması, değişim' },
  { id: 'cat_4', name: 'Mekanik', iconName: 'wrench', description: 'Fren, süspansiyon, genel mekanik' },
  { id: 'cat_5', name: 'Kaporta', iconName: 'car-body', description: 'Boya, göçük düzeltme, kaporta' },
  { id: 'cat_6', name: 'Periyodik Bakım', iconName: 'oil', description: 'Yağ değişimi, filtreler' },
];

export const mockProblemTypes: ProblemType[] = [
  { id: 'prob_1', categoryId: 'cat_1', title: 'Motor Çalışmıyor' },
  { id: 'prob_2', categoryId: 'cat_1', title: 'Motordan Ses Geliyor' },
  { id: 'prob_3', categoryId: 'cat_2', title: 'Akü Bitti' },
  { id: 'prob_4', categoryId: 'cat_3', title: 'Lastik Patladı' },
];
