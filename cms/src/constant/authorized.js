import { formatObjectToArrayStr } from '../utility/Utils';
import { DEFINITION_OF_ROUTE_IDENTIFIER, DEFINITION_ROUTE_ID_OF_CMS, DEFINITION_ROUTE_ID_OF_DASHBOARD } from './routes';

export const rolesName = {
  admin: 'admin',
  tech: 'tech',
  content: 'advise',
  contentLeader: 'contentleader',
};

const PUBLIC_ROUTES = formatObjectToArrayStr(DEFINITION_ROUTE_ID_OF_DASHBOARD);

export const GET_ALL_ROUTE_BY_ADMIN = formatObjectToArrayStr(DEFINITION_OF_ROUTE_IDENTIFIER);

export const listAuthorizedOfRole = [
  {
    name: rolesName.admin,
    authorizedRouteId: [...GET_ALL_ROUTE_BY_ADMIN],
    featuresPermission: {
      ...getFeaturesPerForPublicRoute(),
    },
  },
  {
    name: rolesName.tech,
    authorizedRouteId: [
      ...formatObjectToArrayStr({ ...DEFINITION_ROUTE_ID_OF_CMS, ...DEFINITION_ROUTE_ID_OF_DASHBOARD }),
    ],
  },
  {
    name: rolesName.content,
    authorizedRouteId: [
      DEFINITION_OF_ROUTE_IDENTIFIER.cms,
      DEFINITION_OF_ROUTE_IDENTIFIER.cmsNews,
      DEFINITION_OF_ROUTE_IDENTIFIER.cmsBatDongSan,
      DEFINITION_OF_ROUTE_IDENTIFIER.cmsPhongThuy,
      DEFINITION_OF_ROUTE_IDENTIFIER.cmsPhapLuat,
      DEFINITION_OF_ROUTE_IDENTIFIER.cmsDoiTac,

      DEFINITION_OF_ROUTE_IDENTIFIER.manageQLDA,
      DEFINITION_OF_ROUTE_IDENTIFIER.manageProject,
      DEFINITION_OF_ROUTE_IDENTIFIER.manageProjectImages,

      DEFINITION_OF_ROUTE_IDENTIFIER.manageHouse,
      DEFINITION_OF_ROUTE_IDENTIFIER.mangeCmvLibrary,

      ...PUBLIC_ROUTES,
    ],
    featuresPermission: {
      ...getFeaturesPerForPublicRoute(),
      [DEFINITION_OF_ROUTE_IDENTIFIER.mangeCmvLibrary]: {
        view: true,
        create: true,
        update: true,
        delete: true,
      },
    },
  },
  {
    name: rolesName.contentLeader,
    authorizedRouteId: [
      ...formatObjectToArrayStr({ ...DEFINITION_ROUTE_ID_OF_CMS, ...DEFINITION_ROUTE_ID_OF_DASHBOARD }),
    ],
  },
];

function getFeaturesPerForPublicRoute() {
  let result = {};
  PUBLIC_ROUTES.forEach((route) => {
    result = {
      ...result,
      [route]: {
        view: true,
        create: true,
        update: true,
        delete: true,
      },
    };
  });

  return result;
}

//#region  delete localstorage when test done
export const subPermissionsByAdmin = (object) => {
  let result = {};
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key]) {
      Object.assign(result, { [object[key]]: [object[key]] });
    }
  }
  return result;
};
//#endregion

export const subPermissions = {
  'cms.cmsnews.batdongsan.create': '001001001',
  'cms.cmsnews.batdongsan.approve': '001001002',
  'cms.cmsnews.batdongsan.edit': '001001003',
  
  'cms.cmsnews.phapluat.create': '001002001',
  'cms.cmsnews.phapluat.approve': '001002002',
  'cms.cmsnews.phapluat.edit': '001002003',

  'cms.cmsnews.doitac.create': '001003001',
  'cms.cmsnews.doitac.approve': '001003002',
  'cms.cmsnews.doitac.edit': '001003003',

  'cms.cmsnews.vpphongthuy.create': '001004001',
  'cms.cmsnews.vpphongthuy.delete': '001004002',
  'cms.cmsnews.vpphongthuy.edit': '001004003',

  'cms.cmsnews.banner.create': '002001001',
  'cms.cmsnews.banner.edit': '002001002',
  'cms.cmsnews.banner.delete': '002001003',

  'cms.cmsnews.list-project.active-inactive': '004001001',
  'cms.cmsnews.pricecmv.view': '004002001',

  'cms.cmsnews.QLHCCACHE.delete': '005001001',
  'cms.cmsnews.QLHCP.active-inactive': '005002001',
  'cms.cmsnews.QLHCD.active-inactive': '005003001',
  'cms.cmsnews.qlhcw.active-inactive': '005004001',
  'cms.cmsnews.qlhcs.active-inactive': '005005001',

  'cms.project-manager.projectcms.create': '006001001',
  'cms.project-manager.projectcms.approve': '006001002',
  'cms.project-manager.projectcms.edit': '006001003',
  'cms.project-manager.projectcms.delete': '006001004',

  'cms.project-manager.projecttype.create': '006002001',
  'cms.project-manager.projecttype.edit': '006002002',
  'cms.project-manager.projecttype.delete': '006002003',

  'cms.project-manager.partner.create': '006003001',
  'cms.project-manager.partner.edit': '006003002',
  'cms.project-manager.partner.delete': '006003003',

  'cms.project-manager.advise.export': '006004001',
  'cms.project-manager.advise.edit': '006004002',
  'cms.project-manager.advise.delete': '006004003',

  'cms.project-manager.images-managerment.create': '006005001',
  'cms.project-manager.images-managerment.approve': '006005002',
  'cms.project-manager.images-managerment.edit': '006005003',
  'cms.project-manager.images-managerment.delete': '006005004',

  'cms.project-manager.apartment-category-managerment.create': '006006001',
  'cms.project-manager.apartment-category-managerment.edit': '006006002',
  'cms.project-manager.apartment-category-managerment.delete': '006006003',

  'cms.project-manager.qlhccacheproject.delete': '006007001',

  'cms.house-beauty.parent-category.create': '007001001',
  'cms.house-beauty.parent-category.edit': '007001002',
  'cms.house-beauty.post-news-feed.approved': '007002001',
  'cms.house-beauty.post-news-feed.ban': '007002002',
  'cms.house-beauty.comment.approved': '007003001',
  'cms.house-beauty.comment.ban': '007003002',
  'cms.house-beauty.post-library-beauty.create': '007004001',
  'cms.house-beauty.post-library-beauty.approve': '007004002',
  'cms.house-beauty.post-library-beauty.edit': '007004003',
  'cms.house-beauty.post-library-beauty.delete': '007004004',
  'cms.house-beauty.post-beauty.create': '007005001',
  'cms.house-beauty.post-beauty.edit': '007005002',
  'cms.house-beauty.post-beauty.delete': '007005003',
  'cms.house-beauty.post-beauty.highlight': '007005004',

  'cms.avatar.avatar-category.create': '008001001',
  'cms.avatar.avatar-category.edit': '008001002',
  'cms.avatar.avatar-category.delete': '008001003',
  'cms.avatar.avatar-management.create': '008002001',
  'cms.avatar.avatar-management.edit': '008002002',
  'cms.avatar.avatar-management.delete': '008002003',

  'cms.user.user-comment.ban': '009001001',
  'cms.user.user-comment.history': '009001002',
  'cms.user.user-post.ban': '009002001',
  'cms.user.user-post.history': '009002002',

  'cms.exchange.exchange-post.approved': '010001001',
  'cms.exchange.exchange-post.ban': '010001002',
  'cms.exchange.exchange-post.export': '010001003',
  'cms.exchange.type-bds.create': '010002001',
  'cms.exchange.type-bds.edit': '010002002',
  'cms.exchange.utility.create': '010003001',
  'cms.exchange.utility.edit': '010003002',
  'cms.exchange.user.history': '010004001',
  'cms.exchange.user.ban': '010004002',
  'cms.exchange.management-wallpaper.create': '010005001',
  'cms.exchange.management-wallpaper.edit': '010005002',
  'cms.exchange.management-wallpaper.delete': '010005003',
// Đăng tin theo lô
  'cms.management.lot.number.create.edit': '010007001',
  'cms.management.lot.number.export': '010007002',
  'cms.management.lot.number.filter': '010007003',
  'cms.management.lot.number.manage': '010007004',

};
