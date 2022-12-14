import * as React from 'react';
import {connect} from 'react-redux';
import { InstallGuideStore, DeployStore } from '@/stores/modals';
import { InstallGuideActionTypes } from '@/actions/installGuideAction';
import SideNav from './step3.side';
import ConfigServiceComp from '@/components/configServices';
import {installGuideService} from '@/services';
import { message, Tooltip, Icon, Modal } from 'antd';
import { EnumDeployMode } from './types';
import { AppStoreTypes } from '@/stores';
import * as Http from '@/utils/http';
declare const window: any;

interface Prop {
  installGuideProp: InstallGuideStore;
  actions: InstallGuideActionTypes;
  isKubernetes: boolean;
  deployMode: EnumDeployMode;
  refreshDeployService: Function;
  DeployProp: DeployStore;
  productName: string;
  smoothSelectService?: any;
}

const mapStateToProps = (state: AppStoreTypes) => ({
  smoothSelectService: state.InstallGuideStore.smoothSelectService
});
@(connect(mapStateToProps) as any)
class StepThree extends React.Component<Prop, any> {
  constructor(props) {
    super(props);
    this.state = {
      showGlobalBtn: true,
      disabledAutoBtn: false,
      hostsSelectList: [],
      noHosts: '',
      repeatParams: [],
      allHostList: [],
    };
  }

  componentDidMount() {
    this.getHostRoleMap();
    this.getOldHostInfo();
    const { namespace, baseClusterId, clusterId } = this.props.installGuideProp;
    const { upgradeType } = this.props.DeployProp;
    const params: any = {
      productName: this.props.installGuideProp.selectedProduct?.product_name,
      productVersion:
        this.props.installGuideProp.selectedProduct?.product_version,
      namespace,
      relynamespace: baseClusterId === -1 ? undefined : baseClusterId,
      clusterId,
    };
    if (!params.productName || !params.productVersion) {
      return;
    }
    if (upgradeType === 'smooth') {
      Object.assign(params, {upgrade_mode: 'smooth'})
    } 
    // servicegroup
    installGuideService.getProductServicesInfo(params).then((res) => {
      const arrData = res.data.data;
      for (const i in arrData) {
        for (const j in arrData[i]) {
          const { Instance } = arrData[i][j];
          if (Instance != undefined) {
            const { MaxReplica } = Instance;
            if (MaxReplica === undefined) {
              this.setState({ showGlobalBtn: false });
            }
          }
        }
      }
    });
  }

  // ????????????????????????????????????????????????
  getOldHostInfo = () => {
    const { installGuideProp, actions, productName } = this.props;
    installGuideService
      .getOldHostInfo(
        {
          productName: installGuideProp.selectedProduct.product_name || productName,
        },
        {
          cluster_id: installGuideProp.clusterId || installGuideProp.baseClusterId
        }
      )
      .then((res: any) => {
        res = res.data;
        if (res.code === 0) {
          message.success('????????????');
          actions.setOldHostInfo(res.data);
        } else {
          message.error(res.msg);
        }
      });
  };

  // ??????????????????????????????????????????
  getProductServicesInfo = (shouldGetHost?: boolean) => {
    const { deployMode } = this.props;

    if (deployMode === EnumDeployMode.AUTO) {
      this.refreshDeployServiceForAuto();
    } else {
      this.refreshDeployServiceForManual(shouldGetHost);
    }
  };

  handlegetGlobalAutoConfig = () => {
    this.setState({ showGlobalBtn: false });
    const list = this.props.installGuideProp.unSelectedServiceList.join(',');
    installGuideService
      .getGlobalAutoConfig({
        productName: this.props.installGuideProp.selectedProduct.product_name,
        productVersion:
          this.props.installGuideProp.selectedProduct.product_version,
        carbon_thriftserver: list,
      })
      .then((res) => {
        if (res.data.code === 0) {
          message.success('???????????????');
          this.setState({ disabledAutoBtn: false, showGlobalBtn: true });
          this.getProductServicesInfo(true);
        } else {
          message.error('???????????????');
        }
      });
  };

  handleGlobalAutoConfig = () => {
    this.setState({ disabledAutoBtn: true, showGlobalBtn: true });
    const that = this;
    Modal.confirm({
      title: '????????????????????????????????????',
      content:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      icon: <Icon type="exclamation-circle" theme="filled" />,
      okType: 'danger',
      onOk() {
        that.handlegetGlobalAutoConfig();
      },
      onCancel() {
        that.setState({ disabledAutoBtn: false, showGlobalBtn: true });
      },
    });
  };

  handleSetParamField = (value: string | any[], fieldPath: string) => {
    // ?????????????????????????????????????????????
    this.props.actions.saveParamsFieldConfigState({
      key: fieldPath,
      value: value,
    });
  };

  hadnleResetparamField = (param: any, callback?: Function) => {
    installGuideService
      .resetParamConfigFieldValue({
        ...param,
        productName: this.props.installGuideProp.selectedProduct.product_name,
        serviceName: this.props.installGuideProp.selectedService.serviceKey,
        pid: this.props.installGuideProp.selectedProduct.id,
        product_version:
          this.props.installGuideProp.selectedProduct.product_version,
        namespace: this.props.installGuideProp.namespace,
      })
      .then((res: any) => {
        res = res.data;
        if (res.code === 0) {
          message.success('????????????');
          callback(res);
          this.getProductServicesInfo(false);
        } else {
          message.error(res.msg);
        }
      });
  };

  // param-config submit??????
  commitParamChange = (param: any) => {
    installGuideService
      .modifyProductConfigAll(
        {
          productName: this.props.installGuideProp.selectedProduct.product_name,
          serviceName: this.props.installGuideProp.selectedService.serviceKey,
        },
        param
      )
      .then((res: any) => {
        res = res.data;
        if (res.code === 0) {
          message.success('????????????');
          this.getProductServicesInfo(true);
        } else {
          message.error(res.msg);
        }
      });
  };

  handleConfigCancel = () => {
    // ????????????-??????
    this.getProductServicesInfo(false);
  };

  handleResourceSubmit = (e: any) => {
    const { selectedService, clusterId } = this.props.installGuideProp;
    if (
      selectedService.Instance &&
      e.isCloud !==
        (selectedService.Instance
          ? selectedService.Instance.UseCloud
            ? selectedService.Instance.UseCloud
            : false
          : false)
    ) {
      installGuideService
        .setParamConfigFieldValue(
          {
            productName:
              this.props.installGuideProp.selectedProduct.product_name,
            serviceName: this.props.installGuideProp.selectedService.serviceKey,
          },
          {
            field_path: 'Instance.UseCloud',
            field: e.isCloud,
            namespace: this.props.installGuideProp.namespace,
            clusterId,
          }
        )
        .then((res: any) => {
          res = res.data;
          if (res.code === 0) {
            this.submitHost(e.hosts);
          } else {
            message.error(res.msg);
          }
        });
    } else {
      this.submitHost(e.hosts);
    }
  };

  /**
   * ????????????????????????????????????
   */
  refreshDeployServiceForAuto = () => {
    const { refreshDeployService } = this.props;
    refreshDeployService((productServicesInfo) => {
      const { selectedProduct, selectedService } = this.props.installGuideProp;
      const { product_name } = selectedProduct;
      const { serviceKey } = selectedService;
      const prod = productServicesInfo.find(
        (prod) => prod.productName === product_name
      );
      if (!prod) return;
      const services = Object.keys(prod.content).reduce((temp, key) => {
        return {
          ...temp,
          ...prod.content[key],
        };
      }, {});

      const list = Object.keys(services).map((key) => ({
        ...services[key],
        key,
      }));
      const service = list.find((item) => item.key === serviceKey);

      if (!service) return;
      // ??????selectedService
      this.props.actions.setSelectedConfigService({
        ...service,
        serviceKey: service.key,
      });
    });
  };

  /**
   * ??????????????????????????????
   */
  refreshDeployServiceForManual = (shouldGetHost?: boolean) => {
    const { forcedUpgrade, upgradeType } = this.props.DeployProp;
    const baseClusterId = this.props.installGuideProp.baseClusterId;
    let params = {
      productName: this.props.installGuideProp.selectedProduct.product_name,
      productVersion:
        this.props.installGuideProp.selectedProduct.product_version,
      unSelectService: this.props.installGuideProp.unSelectedServiceList,
      relynamespace: baseClusterId === -1 ? undefined : baseClusterId,
      namespace: this.props.installGuideProp.namespace,
      clusterId: this.props.installGuideProp.clusterId,
    }
    if (upgradeType ==='smooth') {
      Object.assign(params, {upgrade_mode: 'smooth'})
    }
    this.props.actions.getProductServicesInfo(
      params,
      (res: any) => {
        // ????????????selectedService
        for (const fk in res) {
          for (const sk in res[fk]) {
            if (sk === this.props.installGuideProp.selectedService.serviceKey) {
              this.props.actions.setSelectedConfigService({
                ...res[fk][sk],
                serviceKey: sk,
              });
            }
          }
        }

        shouldGetHost &&
          this.props.actions.updateServiceHostList({
            productName:
              this.props.installGuideProp.selectedProduct.product_name,
            serviceName: this.props.installGuideProp.selectedService.serviceKey,
            clusterId: this.props.installGuideProp.clusterId,
          });
      },
      forcedUpgrade
    );
  };

  checkSql = (p: any) => {
    const { clusterId } = this.props.installGuideProp;
    const { productName, smoothSelectService  } = this.props;
    let final_upgrade = false
    if (smoothSelectService?.ServiceAddr) {
      if (smoothSelectService?.ServiceAddr?.UnSelect) {
        final_upgrade = false
      } else {
        final_upgrade = true
      }
    }
    this.props.actions.setSqlErro({
      product_name: productName,
      cluster_id: clusterId,
      final_upgrade: final_upgrade,
      ip: p.toString()
    })
  }

  submitHost = (p: any) => {
    const { upgradeType } = this.props.DeployProp;
    const { namespace, clusterId, selectedService } = this.props.installGuideProp;
    
    installGuideService
      .setIp(
        {
          productName: this.props.installGuideProp.selectedProduct.product_name,
          serviceName: this.props.installGuideProp.selectedService.serviceKey,
        },
        {
          ip: p.toString(),
          clusterId,
          namespace,
        }
      )
      .then((res: any) => {
        res = res.data;
        if (res.code === 0) {
          message.success('????????????');
          this.getProductServicesInfo(true);
          if (selectedService.serviceKey == 'mysql' && upgradeType === 'smooth') {
            this.checkSql(p)
          }
        } else {
          message.error(res.msg);
        }
      });
  };

  getHostRoleMap = async () => {
    const { clusterId } = this.props.installGuideProp;
    const res = await installGuideService.getHostRoleMap({
      cluster_id: clusterId,
    });
    const { code, data } = res.data;
    if (code === 0) {
      window.hostRoleMap = data || [];
    }
  };

  // ????????????????????????????????????????????????
  getCurrentHostsList = (f: string, v: any[]) => {
    const product_name =
      this.props.installGuideProp.selectedProduct.product_name;
    const service_name = this.props.installGuideProp.selectedService.serviceKey;
    if (!product_name || !service_name) {
      return;
    }
    Http.get(
      `/api/v2/product/${product_name}/service/${service_name}/selected_hosts?clusterId=${this.props.installGuideProp.clusterId}`,
      {}
    ).then((data: any) => {
      data = data.data;
      if (data.code === 0) {
        this.setState(
          {
            allHostList: data.data.hosts,
          },
          () => {
            this.handleSaveMoreConfig(f, v); // ???????????????????????????????????????????????????????????????????????????????????????
          }
        );
      } else {
        message.error(data.msg);
      }
    });
  };

  // ????????????
  handleParamBlur = (f: string, v: string | any[]) => {
    if (Array.isArray(v)) {
      if (v.some((y) => y.hosts === '')) {
        this.setState({
          noHosts: f.split('.')[1],
        });
      } else if (v.some((y) => y.hosts !== '' && y.field !== '')) {
        // console.log(v, 'modifyMultiSingleField-----')
        this.changeHosts(); // ?????????????????????????????????????????????
        this.getCurrentHostsList(f, v); // ???????????????????????????????????????????????????????????????
        // installGuideService.modifyMultiSingleField({
        //     productName: this.props.installGuideProp.selectedProduct.ProductName,
        //     serviceName: this.props.installGuideProp.selectedService.serviceKey
        // }, {
        //     field_path: f,
        //     field: JSON.stringify(v)
        // }).then((res: any) => {
        //     res = res.data;
        //     if (res.code === 0) {
        //         message.success('??????????????????');
        //         this.getProductServicesInfo(true);
        //         this.changeHosts()
        //     } else if (res.code === 100 && res.msg.includes('???????????????')) {
        //         const str = res.msg.substring(1, res.msg.indexOf(')')).split(',')
        //         this.setState({
        //             repeatParams: str
        //         })
        //     } else {
        //         message.error(res.msg)
        //     }
        // })
      }
    } else if (typeof v === 'string') {
      installGuideService
        .setParamConfigFieldValue(
          {
            productName:
              this.props.installGuideProp.selectedProduct.product_name,
            serviceName: this.props.installGuideProp.selectedService.serviceKey,
          },
          {
            field_path: f,
            field: v,
            namespace: this.props.installGuideProp.namespace,
            clusterId: this.props.installGuideProp.clusterId,
          }
        )
        .then((res: any) => {
          res = res.data;
          if (res.code === 0) {
            message.success('????????????');
            this.getProductServicesInfo(true);
          } else {
            message.error(res.msg);
          }
        });
    }
  };

  // ?????????????????????
  handleSaveMoreConfig = (f: string, v: any[]) => {
    const arr = v.map((key) => {
      return key.hosts;
    });
    const { allHostList } = this.state;
    const selectHosts = arr.join(',').split(',');
    // console.log(selectHosts, 'selectHosts-------allHostList', allHostList)
    // ???????????????????????????????????????hosts????????????????????????
    if (
      allHostList &&
      selectHosts.length === allHostList.length &&
      allHostList.some((host) => selectHosts.indexOf(host) !== -1)
    ) {
      installGuideService
        .modifyMultiSingleField(
          {
            productName:
              this.props.installGuideProp.selectedProduct.product_name,
            serviceName: this.props.installGuideProp.selectedService.serviceKey,
          },
          {
            field_path: f,
            field: JSON.stringify(v),
            clusterId: this.props.installGuideProp.clusterId,
          }
        )
        .then((res: any) => {
          res = res.data;
          if (res.code === 0) {
            message.success('??????????????????');
            this.getProductServicesInfo(true);
            this.changeHosts();
          } else if (res.code === 100 && res.msg.includes('???????????????')) {
            const repeatArr = res.msg
              .substring(1, res.msg.indexOf(')'))
              .split(',');
            this.setState({
              repeatParams: repeatArr,
            });
          } else {
            message.error(res.msg);
          }
        });
    } else {
      this.setState({
        noHosts: f.split('.')[1],
      });
    }
  };

  sideNav: any = null;

  // ????????????????????????
  changeHosts = () => {
    this.setState({
      noHosts: '',
      repeatParams: [],
    });
  };

  render() {
    const { selectedService, serviceHostList } =
      this.props.installGuideProp;
    // const { Status } = selectedProduct;
    // let p;
    // const p1 = (
    //   <p className="title ml-10">
    //     <Button
    //       icon="apartment"
    //       type="primary"
    //       onClick={this.handleGlobalAutoConfig}
    //       disabled={this.state.disabledAutoBtn}
    //       style={{ fontSize: '12px', height: '26px' }}>
    //       ??????????????????
    //     </Button>
    //     &nbsp;
    //     <span>
    //       ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    //     </span>
    //   </p>
    // );
    const p = (
      <p className="title ml-10">
        <Icon
          type="exclamation-circle"
          theme="filled"
          style={{ color: '#3f87ff', marginRight: 8 }}
        />
        ???????????????????????????????????????????????????????????????
      </p>
    );
    // if (Status === 'undeployed' && this.state.showGlobalBtn) {
    //   p = p1;
    // } else {
    //   p = p2;
    // }

    return (
      <div className="step-three-container step-content-container">
        {p}
        <div className="edit-config-container">
          <SideNav
            ref={(ref) => (this.sideNav = ref)}
            width={200}
            actions={this.props.actions}
            selectedService={this.props.installGuideProp.selectedService}
            updateServiceHostList={this.props.actions.updateServiceHostList}
            selectedProduct={this.props.installGuideProp.selectedProduct}
            productName={this.props.productName}
            clusterId={this.props.installGuideProp.clusterId}
            setSelectedConfigService={
              this.props.actions.setSelectedConfigService
            }
            productServicesInfo={
              this.props.installGuideProp.productServicesInfo
            }
            deployMode={this.props.deployMode}
            saveInstallInfo={this.props.actions.saveInstallInfo}
          />
          <div className="step-three-main-container">
            {(this.props.installGuideProp.selectedService.serviceKey && (
              <div>
                <div className="header" style={{ paddingTop: 14.5 }}>
                  <p className="title">{selectedService.serviceKey}</p>
                  {selectedService.Version !== '' && (
                    <Tooltip title="???????????????">
                      <p className="version-tag tag">
                        {selectedService.Version}
                      </p>
                    </Tooltip>
                  )}
                  {selectedService.BaseService !== '' && (
                    <Tooltip title="?????????????????????????????????????????????">
                      <p className="depend-tag tag">
                        {selectedService.BaseProduct}@
                        {selectedService.BaseService}
                      </p>
                    </Tooltip>
                  )}
                  {selectedService.DependsOn &&
                    selectedService.DependsOn.map((o: string, i: number) => {
                      return (
                        <p key={i.toString()} className="depend-tag tag">
                          {o}
                          <Tooltip title="?????????????????????????????????????????????">
                            <Icon
                              style={{ color: '#53E3C3', marginLeft: 3 }}
                              type="info-circle"
                            />
                          </Tooltip>
                        </p>
                      );
                    })}
                </div>
                <div className="tabs-container">
                  <ConfigServiceComp
                    paramChangeBlur={this.handleParamBlur}
                    handleCancel={this.handleConfigCancel}
                    handleResourceSubmit={this.handleResourceSubmit}
                    commitParamChange={this.commitParamChange}
                    afterParamFieldChange={this.handleSetParamField}
                    resetParamFieldvalue={this.hadnleResetparamField}
                    resourceState={this.props.installGuideProp.resourceState}
                    saveResourceState={this.props.actions.saveResourceState}
                    serviceData={this.props.installGuideProp.selectedService}
                    hostList={serviceHostList}
                    selectedProduct={
                      this.props.installGuideProp.selectedProduct
                    }
                    installGuideProp={this.props.installGuideProp}
                    DeployProp={this.props.DeployProp}
                    actions={this.props.actions}
                    isKubernetes={this.props.isKubernetes}
                    sname={
                      this.props.installGuideProp.selectedService.serviceKey
                    }
                    pname={
                      this.props.installGuideProp.selectedProduct.product_name
                    }
                    noHosts={this.state.noHosts}
                    repeatParams={this.state.repeatParams}
                    changeHosts={this.changeHosts}
                    getProductServicesInfo={this.getProductServicesInfo}
                  />
                </div>
              </div>
            )) || (
              <p className="no-select-text">?????????????????????????????????????????????</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepThree;
