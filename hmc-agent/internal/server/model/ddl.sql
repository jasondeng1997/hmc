CREATE DATABASE `dtagent` CHARACTER SET utf8 COLLATE utf8_general_ci;

USE dtagent;

CREATE TABLE IF NOT EXISTS `update_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sidecar_id` char(36) NOT NULL COMMENT 'Sidecar ID',
  `type` tinyint(1) NOT NULL COMMENT '安装／升级类型',
  `date` datetime NOT NULL COMMENT '事件时间',
  `result` tinyint(1) NOT NULL COMMENT '作业结果',
  `op_time` int(32) NOT NULL COMMENT '作业消耗时间',
  `version` varchar(32) NOT NULL DEFAULT '' COMMENT '升级之后的版本好',
  `download_size` int(11) DEFAULT NULL COMMENT '升级包大小',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `product_list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) NOT NULL COMMENT '产品类型',
  `name` varchar(20) DEFAULT NULL COMMENT '产品名',
  `version` varchar(10) DEFAULT NULL COMMENT '产品版本号',
  `desc` varchar(255) DEFAULT NULL COMMENT '产品备注',
  `md5` char(32) DEFAULT NULL COMMENT '安装包md5',
  `url` varchar(255) DEFAULT NULL COMMENT '下载地址',
  `release_date` date DEFAULT NULL COMMENT '发布时间',
  `deploy_times` int(11) DEFAULT '0' COMMENT '成功被安装的服务器数量',
  `deploy_fail_times` int(11) DEFAULT '0' COMMENT '安装失败的服务器数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `agent_list` (
  `id` char(36) NOT NULL COMMENT 'Agent ID (UUID)',
  `sidecar_id` char(36) NOT NULL COMMENT 'sidecar id',
  `type` tinyint(1) NOT NULL COMMENT 'agent类型',
  `name` char(32) NULL DEFAULT '' COMMENT 'agent 名称',
  `version` char(32) NOT NULL DEFAULT '' COMMENT 'agent版本',
  `is_uninstalled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已被卸载',
  `deploy_date` datetime DEFAULT NULL COMMENT 'agent部署时间',
  `auto_deployment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是自动部署的',
  `last_update_date` datetime DEFAULT NULL COMMENT '最近更新时间',
  `auto_updated` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是自动升级的',
  PRIMARY KEY (`id`),
  KEY `uuid` (`sidecar_id`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Sidecar管控的Agent关联信息表';

CREATE TABLE IF NOT EXISTS `operation_history` (
  `seq` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '操作序列',
  `op_name` varchar(20) NOT NULL DEFAULT '' COMMENT '操作名称',
  `op_time` datetime NOT NULL COMMENT '操作时间',
  `target` char(36) NOT NULL DEFAULT '' COMMENT '目标id（sidecar id）',
  `send_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '操作状态',
  `op_result` tinyint(1) DEFAULT '1' COMMENT '操作执行状态',
  `op_return_msg` mediumblob DEFAULT NULL COMMENT '操作返回内容',
  `finish_time` datetime DEFAULT NULL COMMENT '操作执行结束时间',
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `progress_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seq` int(11) unsigned NOT NULL COMMENT '对应操作序列号',
  `ts` datetime NOT NULL COMMENT '事件时间',
  `progress` decimal(5,2) NOT NULL DEFAULT '0.00' COMMENT '进度百分比',
  `sidecar_id` char(36) NOT NULL DEFAULT '' COMMENT 'sidecar id',
  `agent_id` char(36) DEFAULT '' COMMENT 'agent id',
  `msg` varchar(100) DEFAULT '' COMMENT '附带信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `sidecar_list` (
  `id` char(36) NOT NULL COMMENT 'Sidecar ID (UUID)',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT 'Sidecar状态',
  `disabled` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否被屏蔽',
  `name` varchar(32) DEFAULT '' COMMENT 'Sidecar备注名',
  `version` varchar(32) DEFAULT '' COMMENT 'Sidecar版本',
  `host` varchar(255) DEFAULT '' COMMENT '主机域名或者ip',
  `local_ip` varchar(255) DEFAULT '' COMMENT '主机ip',
  `os_type` varchar(16) DEFAULT '' COMMENT '目标系统类型,linux，windows等',
  `is_ecs` tinyint(1) DEFAULT '0' COMMENT '是否是ECS',
  `os_platform` varchar(64) DEFAULT '' COMMENT 'os完整的名称',
  `os_version` varchar(64) DEFAULT '' COMMENT 'os版本号',
  `cpu_serial` varchar(64) DEFAULT '' COMMENT 'cpu型号',
  `cpu_cores` tinyint(8) DEFAULT '0' COMMENT 'cpu内核数',
  `mem_size` bigint(20) unsigned DEFAULT '0' COMMENT '内存容量',
  `swap_size` bigint(20) unsigned DEFAULT '0' COMMENT '交换空间容量',
  `deploy_date` datetime DEFAULT NULL COMMENT 'Sidecar部署时间',
  `auto_deployment` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是自动部署的',
  `last_update_date` datetime DEFAULT NULL COMMENT '最近更新时间',
  `auto_updated` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是自动升级的',
  `server_host` varchar(255) DEFAULT '' COMMENT 'api server ip',
  `server_port` int(11) DEFAULT 0 COMMENT 'api server port',
  `ssh_host` varchar(255) DEFAULT '' COMMENT '安装用的ssh主机域名或者ip',
  `ssh_user` varchar(60) DEFAULT '' COMMENT 'ssh用户名',
  `ssh_password` varchar(100) DEFAULT '' COMMENT 'ssh密码',
  `ssh_port` int(11) DEFAULT '22' COMMENT 'ssh端口',
  `cpu_usage` decimal(6,2) DEFAULT '-1' COMMENT 'cpu使用率',
  `mem_usage` bigint(20) DEFAULT '-1' COMMENT '物理内存使用',
  `swap_usage` bigint(20) DEFAULT '-1' COMMENT '交换空间使用',
  `load1` float DEFAULT '-1' COMMENT 'cpu load1',
  `uptime` double DEFAULT '-1' COMMENT '系统启动时间',
  `disk_usage` text DEFAULT NULL COMMENT '各个硬盘使用率',
  `net_usage` text DEFAULT NULL COMMENT '各个网卡统计',
  PRIMARY KEY (`id`),
  KEY `uuid` (`id`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Sidecar客户端';

INSERT INTO sidecar_list (id, status, disabled, name, version, host, os_type, is_ecs, os_platform, os_version, cpu_serial, cpu_cores, mem_size, deploy_date, auto_deployment, last_update_date, auto_updated, server_host, server_port, ssh_host, ssh_user, ssh_password, ssh_port) VALUES ('87DACBBA-5BE4-4C85-9B05-F313B1EE80B9', 3, 0, 'whl_win10', '', '', '', 0, '', '', '', 0, 0, null, 0, null, 0, '', 0, '', '', '', 22);

