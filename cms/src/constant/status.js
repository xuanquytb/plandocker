export const STATUS_CODE = {
  success: 200,
  create: 201,
  badRequest: 400,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
  systemError: 1001,
};

export const STATUS = {
  inActive: 'INACTIVE',
  active: 'ACTIVE',
};

export const LABEL_STATUS = {
  [STATUS.active]: 'Hoạt động',
  [STATUS.inActive]: 'Không hoạt động',
};

export const STATUS_OPTIONS = [
  { label: 'Hoạt động', value: STATUS.active },
  { label: 'Không hoạt động', value: STATUS.inActive },
];

export const POST_STATUSES = {
  pending: 'Pending',
  approved: 'Approved',
  reject: 'Reject',
  deleted: 'Deleted',
  solded: 'SOLD',
};

export const LABEL_POST_STATUS = {
  [POST_STATUSES.pending]: 'Chờ duyệt',
  [POST_STATUSES.approved]: 'Đã Duyệt',
  [POST_STATUSES.reject]: 'Từ chối',
  [POST_STATUSES.deleted]: 'Đã huỷ',
  [POST_STATUSES.solded]: 'Đã bán',
};

export const POST_STATUS_ACTIONS = {
  [POST_STATUSES.reject]: 'Từ chối',
  [POST_STATUSES.approved]: 'Phê duyệt',
  [POST_STATUSES.solded]: 'Đã bán',
};

export const POST_STATUS_OPTIONS = [
  { label: 'Chờ duyệt', value: POST_STATUSES.pending },
  { label: 'Đã duyệt', value: POST_STATUSES.approved },
  { label: 'Từ chối', value: POST_STATUSES.reject },
];
