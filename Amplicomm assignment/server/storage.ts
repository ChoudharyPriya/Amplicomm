import { users, products, cartItems, type User, type InsertUser, type Product, type InsertProduct, type CartItem, type InsertCartItem } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getDealProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getCartItems(userId: number): Promise<CartItem[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private cartItems: Map<number, CartItem>;
  private currentUserId: number;
  private currentProductId: number;
  private currentCartId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.cartItems = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentCartId = 1;
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: Omit<Product, 'id'>[] = [
      {
        name: "Arterosil HP by Calroy 60 capsules",
        brand: "Arterosil",
        price: "99.00",
        originalPrice: null,
        description: "Advanced cardiovascular support supplement",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "cardiovascular",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 24
      },
      {
        name: "Allergy Research Group Nattokinase",
        brand: "Allergy Research Group",
        price: "84.00",
        originalPrice: "115.99",
        description: "High-quality nattokinase enzyme supplement",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "enzymes",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 28
      },
      {
        name: "Nordic Naturals ProOmega 2000",
        brand: "Nordic Naturals",
        price: "112.99",
        originalPrice: null,
        description: "Premium omega-3 fish oil supplement",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "omega-3",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 33
      },
      {
        name: "Pure Encapsulations Magnesium (glycinate)",
        brand: "Pure Encapsulations",
        price: "97.44",
        originalPrice: null,
        description: "Highly bioavailable magnesium supplement",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "minerals",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 14
      },
      {
        name: "Pure Encapsulations O.N.E Multivitamin",
        brand: "Pure Encapsulations",
        price: "26.76",
        originalPrice: null,
        description: "Complete daily multivitamin",
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "multivitamins",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 14
      },
      {
        name: "Garden of Life Vitamin D3",
        brand: "Garden of Life",
        price: "45.99",
        originalPrice: "59.99",
        description: "Organic whole food vitamin D3 supplement",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "vitamins",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 23
      },
      {
        name: "Now Foods CoQ10 100mg",
        brand: "Now Foods",
        price: "32.50",
        originalPrice: "42.99",
        description: "Coenzyme Q10 for cellular energy support",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "antioxidants",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 24
      },
      {
        name: "Thorne Health Curcumin Phytosome",
        brand: "Thorne Health",
        price: "78.90",
        originalPrice: "95.00",
        description: "Advanced bioavailable curcumin supplement",
        image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "anti-inflammatory",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 17
      },
      {
        name: "Life Extension Resveratrol",
        brand: "Life Extension",
        price: "56.25",
        originalPrice: "75.00",
        description: "High-potency resveratrol for longevity support",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "antioxidants",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 25
      },
      {
        name: "Pure Encapsulations Probiotic-5",
        brand: "Pure Encapsulations",
        price: "89.99",
        originalPrice: "109.99",
        description: "Multi-strain probiotic for digestive health",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        category: "digestive",
        isFeatured: true,
        isDeal: true,
        discountPercentage: 18
      }
    ];

    sampleProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.isFeatured);
  }

  async getDealProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.isDeal);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getCartItems(userId: number): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(item => item.userId === userId);
  }

  async addToCart(insertCartItem: InsertCartItem): Promise<CartItem> {
    const id = this.currentCartId++;
    const cartItem: CartItem = { ...insertCartItem, id };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (item) {
      const updatedItem = { ...item, quantity };
      this.cartItems.set(id, updatedItem);
      return updatedItem;
    }
    return undefined;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }
}

export const storage = new MemStorage();
