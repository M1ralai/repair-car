import React from 'react';
import { SelectBox } from '../SelectBox/SelectBox';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button/Button';
import './AdvancedFilterBar.css';

export interface FilterOptions {
  searchTerm: string;
  city: string;
  district: string;
  category: string;
  status: string;
}

interface AdvancedFilterBarProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  onSearch: () => void;
}

export const AdvancedFilterBar: React.FC<AdvancedFilterBarProps> = ({ filters, onChange, onSearch }) => {
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="advanced-filter-bar">
      <div className="filter-group text-search">
        <TextInput 
          label="" 
          value={filters.searchTerm} 
          onChange={(val) => updateFilter('searchTerm', val)} 
          placeholder="İsim veya Telefon Ara..." 
        />
      </div>
      <div className="filter-group">
        <SelectBox 
          label="" 
          value={filters.city} 
          options={[{value: '', label: 'Tüm Şehirler'}, {value: 'İstanbul', label: 'İstanbul'}, {value: 'Ankara', label: 'Ankara'}, {value: 'İzmir', label: 'İzmir'}, {value: 'Bursa', label: 'Bursa'}]} 
          onChange={(val) => updateFilter('city', val)} 
        />
      </div>
      <div className="filter-group">
        <TextInput 
          label="" 
          value={filters.district} 
          onChange={(val) => updateFilter('district', val)} 
          placeholder="İlçe (Opsiyonel)" 
        />
      </div>
       <div className="filter-group">
        <SelectBox 
          label="" 
          value={filters.category} 
          options={[{value: '', label: 'Tüm Kategoriler'}, {value: 'Mekanik', label: 'Mekanik'}, {value: 'Kaporta', label: 'Kaporta'}, {value: 'Oto Kurtarma', label: 'Oto Kurtarma'}]} 
          onChange={(val) => updateFilter('category', val)} 
        />
      </div>
       <div className="filter-group">
        <SelectBox 
          label="" 
          value={filters.status} 
          options={[{value: '', label: 'Tüm Statüler'}, {value: 'active', label: 'Aktif'}, {value: 'passive', label: 'Pasif'}, {value: 'approved', label: 'RepairCar Onaylı'}]} 
          onChange={(val) => updateFilter('status', val)} 
        />
      </div>
      <div className="filter-group action">
        <Button onClick={onSearch} variant="primary">Filtrele</Button>
      </div>
    </div>
  );
};
