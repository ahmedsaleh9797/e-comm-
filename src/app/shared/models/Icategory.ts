interface allCategoryResponse {
  results: number;
  metadata: Metadata;
  data: category[];
}

interface category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}