export default {
    msg: 'ok',
    code: 0,
    data: [
        {
            product_name: 'DB',
            group: 'default',
            service_name_list: 'prometheus,pushgateway,redis,zookeeper'
        },
        {
            product_name: 'DB',
            group: 'mysql',
            service_name_list: 'mysql,mysql_slave'
        },
        {
            product_name: 'Hadoop',
            group: 'carbondata',
            service_name_list: 'carbon_hivemetastore,carbon_thriftserver'
        },
        {
            product_name: 'Hadoop',
            group: 'default',
            service_name_list: 'hadoop_pkg'
        },
        {
            product_name: 'Hadoop',
            group: 'flink',
            service_name_list: 'historyserver,yarn_session'
        },
        {
            product_name: 'Hadoop',
            group: 'hdfs',
            service_name_list:
        'hdfs_datanode,hdfs_journalnode,hdfs_namenode,hdfs_zkfc'
        },
        {
            product_name: 'Hadoop',
            group: 'spark',
            service_name_list: 'hivemetastore,thriftserver'
        },
        {
            product_name: 'Hadoop',
            group: 'yarn',
            service_name_list: 'jobhistory,yarn_nodemanager,yarn_resourcemanager'
        },
        {
            product_name: 'Insight',
            group: 'default',
            service_name_list:
        'Insight_Analytics,Insight_API,Insight_Batch,Insight_Console,Insight_Engine,Insight_Gateway,Insight_Schedule,Insight_Stream,Insight_Valid,tengine'
        }
    ]
};
