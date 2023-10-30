export const ACTIONS = {
  create: 'CREATE',
  edit: 'EDIT',
  delete: 'DELETE',
  detail: 'DETAIL',
  cancel: 'CANCEL',
  copy: 'COPY',
};

export const DEFINED_TYPE_OF_BAN_USER = {
  post: 'POST',
  landItem: 'LAND_ITEM',
  comment: 'COMMENT',
};

export const BEAUTY_HOUSE_CATEGORY_TYPES = {
  chillHouse: 'ChillHouse',
  chillCorner: 'ChillCorner',
  library: 'Library',
};

export const DEFIEND_BEAUTY_HOUSE_CATE_OPTIONS = [
  { value: BEAUTY_HOUSE_CATEGORY_TYPES.chillHouse, label: 'Khoe tổ ấm' },
  { value: BEAUTY_HOUSE_CATEGORY_TYPES.chillCorner, label: 'Góc chill' },
  { value: BEAUTY_HOUSE_CATEGORY_TYPES.library, label: 'Thư viện nhà đẹp' },
];

export const DEFINED_TYPE_OF_BDS = {
  landstockRent: 'LANDSTOCK_RENT',
};

export const DEFINED_HIGHLIGHT_OPTIONS = {
  isHighlight: 'Nổi bật',
  noHighlight: 'Không nổi bật',
};

export const SALE_EXCHANGE = {
  buy: 'BUY',
  sell: 'SELL',
  lease: 'LEASE',
  rent: 'RENT',
};

export const LABLE_SALE_EXCHANGE = {
  [SALE_EXCHANGE.buy]: 'Cần mua',
  [SALE_EXCHANGE.sell]: 'Bán',
  [SALE_EXCHANGE.lease]: 'Cho thuê',
  [SALE_EXCHANGE.rent]: 'Cần thuê',
};

export const FORMAT_DATE = 'YYYY-MM-DD[T]HH:mm:ss';

export const DEFAULT_MAX_PAGE_SIZE = 10000;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_NO = 0;
export const DEFAULT_SORT_DATE = 'createdAt:desc';
export const DEFAULT_SORT_UPDATE_DATE = 'updatedAt:desc';
