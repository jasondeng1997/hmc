export const HeaderActions = {
  SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
  SET_CUR_PRODUCT: 'SET_CUR_PRODUCT',
  GET_PARENT_PROD_LIST: 'GET_PARENT_PROD_LIST',
  SET_CUR_PARENT_PROD: 'SET_CUR_PARENT_PROD',
  GET_S_G_LIST: 'GET_S_G_LIST',
  GET_INSTANCE_LIST: 'GET_INSTANCE_LIST',
  SET_CUR_PARENT_CLUSTER: 'SET_CUR_PARENT_CLUSTER',
  GET_PARENT_CLUSTER_LIST: 'GET_PARENT_CLUSTER_LIST',
};
export const ServiceActions = {
  SERVER_LIST: 'SERVER_LIST', // 获取单个服务组信息
  SERVER_SET_LIST: 'SERVER_SET_LIST',
  STATUS_LIST: 'STATUS_LIST',
  ALERT_CONTROL: 'ALERT_CONTROL',
  ALERT_STATISTIC: 'ALERT_STATISTIC',
  GET_SERVICES: 'GET_SERVICES',
  GET_SERVICE_GROUP: 'GET_SERVICE_GROUP',
  UPDATE_SERVICE_LIST: 'UPDATE_SERVICE_LIST',
  CLEAR_SERVICE_LIST: 'CLEAR_SERVICE_LIST',
  GET_HOSTS: 'GET_HOSTS',
  GET_HOST_CONFIG: 'GET_HOST_CONFIG',
  START_INSTANCE: 'START_INSTANCE',
  STOP_INSTANCE: 'STOP_INSTANCE',
  DISABLE_INSTANCE: 'DISABLE_INSTANCE',
  SWITCH_SERVICE_RESTART: 'SWITCH_SERVICE_RESTART',
  REFRESH_PROD_SERVICE: 'REFRESH_PROD_SERVICE',
  SET_CONFIG_MODIFY: 'SET_CONFIG_MODIFY',
  SET_CURRENT_SERVICE: 'SET_CURRENT_SERVICE',
  SET_CURRENT_PRODUCT: 'SET_CURRENT_PRODUCT',
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  ADD_HA_ROLE: 'ADD_HA_ROLE',
  SET_CONFIG_FILE: 'SET_CONFIG_FILE',
  GET_RESART_SERVICE: 'GET_RESART_SERVICE', // EM提醒
  SET_RED_SERVICE: 'SET_RED_SERVICE',
  GET_HEALTH_LIST: 'GET_HEALTH_LIST', // 健康检查
};
export const HostActions = {
  HOST_HOME: 'HOST_HOME',
  HOST_SET_FILTER: 'HOST_SET_FILTER',
  HOST_GET_FILTER: 'HOST_GET_FILTER',
  HOST_GET_LIST: 'HOST_GET_LIST',
  HOST_SET_SELECTED_ROWS: 'HOST_SET_SELECTED_ROW',
  HOST_SET_SEARCH_VALUE: 'HOST_SET_SEARCH_VALUE',
  HOST_SET_PAGER: 'HOST_SET_PAGER',
  UPDATE_HOST_LIST: 'UPDATE_HOST_LIST',
  GET_CLUSTER_HOST_LIST: 'GET_CLUSTER_HOST_LIST',
  UPDATE_HOST_INSTANCES_LIST: 'UPDATE_HOST_INSTANCES_LIST',
  UPDATE_SELECT_HOST_INFO: 'UPDATE_SELECT_HOST_INFO',
  UPDATE_HOST_SERVICES_LIST: 'UPDATE_HOST_SERVICES_LIST',
  RESET_HOST_LIST: 'RESET_HOST_LIST',
  GET_HOSTGROUP_LISTS: 'GET_HOSTGROUP_LISTS',
  GET_CLUSTER_HOSTGROUP_LISTS: 'GET_CLUSTER_HOSTGROUP_LISTS',
};

export const AddHostActions = {
  to_page: 'to_page',
  valid_host: 'valid_host',
  install_host: 'install_host',
  install_host_by_pk: 'install_host_by_pk',
  install_host_by_pass_word: 'install_host_by_pass_word',
  install_check: 'install_check',
  set_disabled: 'set_disabled',
  update_installMsg: 'update_installMsg',
  update_hostArr: 'update_hostArr',
  reset_state: 'reset_state',
};
export const DashBoardActions = {
  UPDATE_DASH_LIST: 'UPDATE_DASH_LIST',
};

export const InstallGuideActions = {
  EDIT_RUNTIME_STATE: 'EDIT_RUNTIME_STATE',
  EDIT_DEPLOY_STATE: 'EDIT_DEPLOY_STATE',
  NEXT_STEP: 'NEXT_STEP',
  LAST_STEP: 'LAST_STEP',
  SAVE_INSTALL_INFO: 'SAVE_INSTALL_INFO',
  SAVE_SELECTED_CLUSTER: 'SAVE_SELECTED_CLUSTER',
  SAVE_INSTALL_TYPE: 'SAVE_INSTALL_TYPE',
  SAVE_SELECTED_NAMESPACE: 'SAVE_SELECTED_NAMESPACE',
  SAVE_SELECTED_BASECLUSTER: 'SAVE_SELECTED_BASECLUSTER',
  SAVE_SELECTED_SEERVICE: 'SAVE_SELECTED_SEERVICE',
  SAVE_UNSELECTED_SEERVICE: 'SAVE_UNSELECTED_SEERVICE',
  UPDATE_PRODUCT_PACEAGE_LIST: 'UPDATE_PRODUCT_PACEAGE_LIST',
  QUIT_GUIDE: 'QUIT_GUIDE',
  UPDATE_PRODUCT_PACEAGE_SERVICES_LIST: 'UPDATE_PRODUCT_PACEAGE_SERVICES_LIST',
  UPDATE_PRODUCT_BASECLUSTER_INFO: 'UPDATE_PRODUCT_BASECLUSTER_INFO',
  RESET_INSTALL_CONFIG: 'RESET_INSTALL_CONFIG',
  UPDATE_PRODUCT_SERVICES_INFO: 'UPDATE_PRODUCT_SERVICES_INFO',
  UPDATE_HOST_INSTALL_TO_LIST: 'UPDATE_HOST_INSTALL_TO_LIST',
  UPDATE_CLUSTER_LIST: 'UPDATE_CLUSTER_LIST',
  UPDATE_NAMESPACE_LIST: 'UPDATE_NAMESPACE_LIST',
  SET_SELECTED_CONFIG_SERVICE: 'SET_SELECTED_CONFIG_SERVICE',
  UPDATE_SERVICE_HOST_LIST: 'UPDATE_SERVICE_HOST_LIST',
  SAVE_RESOURCE_STATE: 'SAVE_RESOURCE_STATE',
  SAVE_PARAMS_FIELD_CONFIG_STATE: 'SAVE_PARAMS_FIELD_CONFIG_STATE',
  START_DEPLOY: 'START_DEPLOY',
  UPDATE_DEPLOY_LIST: 'UPDATE_DEPLOY_LIST',
  UPDATE_CURRENT_DEPLOY_LIST: 'UPDATE_CURRENT_DEPLOY_LIST',
  STOP_DEPLOY: 'STOP_DEPLOY',
  INIT_INSTALLGUIDE: 'INIT_INSTALLGUIDE',
  DEPLOY_FINISHED: 'DEPLOY_FINISHED',
  QUIT_CONFIG: 'QUIT_CONFIG',
  GO_TO_STEP: 'GO_TO_STEP',
  SET_DEPLOY_UUID: 'SET_DEPLOY_UUID',
  SET_OLD_HOST_INFO: 'SET_OLD_HOST_INFO',
  SET_SQL_ERRO: 'SET_SQL_ERRO',
  SET_SMOOTH_SELECT_SERVICE: 'SET_SMOOTH_SELECT_SERVICE',
  SET_SELECT_PRODUCTLINE: 'SET_SELECT_PRODUCTLINE',
};
// 部署服务
export const deployActionTypes = {
  UPDATE_PRD_CONFIG: 'UPDATE_PRD_CONFIG',
  MODIFY_PRD_CONFIG: 'MODIFY_PRD_CONFIG',
  GET_SERVICE_IPS: 'GET_SERVICE_IPS',
  UPDATE_IP_CONFIG: 'UPDATE_IP_CONFIG',
  ADD_IP_TO_CONFIG: 'ADD_IP_TO_CONFIG',
  START_PRD_DEPLOY: 'START_PRD_DEPLOY',
  UPDATE_DEPLOY_LIST: 'UPDATE_DEPLOY_LIST',
  MODIFY_INSTANCE_CONFIG: 'MODIFY_INSTANCE_CONFIG',
  MODIFY_CONFIG_CONFIG: 'MODIFY_CONFIG_CONFIG',
  UPDATE_DEPLOY_STATUS: 'UPDATE_DEPLOY_STATUS',
  RETURN_TO_CONFIG: 'RETURN_TO_CONFIG',
  RESET_DEPLOY_STATUS: 'RESET_DEPLOY_STATUS',
  SWITH_USE_CLOUD: 'SWITH_USE_CLOUD',
  UPDATE_IP_BY_SERVICE: 'UPDATE_IP_BY_SERVICE',
  SAVE_FORCED_UPGRADE: 'SAVE_FORCED_UPGRADE',
  UPGRADE_TYPE: 'UPGRADE_TYPE',
  GET_FIRST_SMOOTH: 'GET_FIRST_SMOOTH',
};
// 卸载
export const unDeployActionTypes = {
  START_UNDEPLOY: 'START_UNDEPLOY',
  UPDATE_UNDEPLOY_LIST: 'UPDATE_UNDEPLOY_LIST',
  UPDATE_CURRENT_UNDEPLOY_LIST: 'UPDATE_CURRENT_UNDEPLOY_LIST',
  GET_UNDEPLOY_LOG: 'GET_UNDEPLOY_LOG',
};

export const UserCenterActions = {
  SAVE_USER_INFO: 'SAVE_USER_INFO',
  SET_ROLE_AUTHORITY_LIST: 'SET_ROLE_AUTHORITY_LIST',
};

export const EditClusterActions = {
  SET_CLUSTER_INFO: 'SET_CLUSTER_INFO',
  RESET_CLUSTER_INFO: 'RESET_CLUSTER_INFO',
};