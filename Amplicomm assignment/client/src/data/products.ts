export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  type: 'circular' | 'square';
}

export interface HealthConcern {
  id: string;
  name: string;
  image: string;
}

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Pure Encapsulations',
    logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  },
  {
    id: '2',
    name: 'Nordic Naturals',
    logo: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  },
  {
    id: '3',
    name: 'Thorne Health',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  },
  {
    id: '4',
    name: 'Life Extension',
    logo: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  },
  {
    id: '5',
    name: 'Garden of Life',
    logo: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  },
  {
    id: '6',
    name: 'HealthVital',
    logo: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Multivitamins',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  },
  {
    id: '2',
    name: 'Omega - 3',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  },
  {
    id: '3',
    name: 'Nervous system support',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  },
  {
    id: '4',
    name: 'Gastrointestinal Health',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  },
  {
    id: '5',
    name: 'Joint Health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  },
  {
    id: '6',
    name: 'Household Essentials',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    type: 'circular'
  }
];

export const healthConcerns: HealthConcern[] = [
  {
    id: '1',
    name: 'Diabetes',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  },
  {
    id: '2',
    name: 'Heart Care',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  },
  {
    id: '3',
    name: 'Stomach Care',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  },
  {
    id: '4',
    name: 'Liver care',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  },
  {
    id: '5',
    name: 'Bone, Joint & Muscle Care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  },
  {
    id: '6',
    name: 'Kidney Care',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400'
  }
];
