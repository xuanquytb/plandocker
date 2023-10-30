export const API_CMS_V1_PERMISSIONS_USER = "api/cms/v1/permissons/users";

// system
export const callApiGetPermissionForUser = async () => {
  const response = await get(
    {
      url: API_CMS_V1_PERMISSIONS_USER,
    },
    {
      hidden: true,
    }
  );

  return response.data;
};
