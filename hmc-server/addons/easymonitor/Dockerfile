FROM lgatica/openssh-client

LABEL maintainer="tech@huahuidata.com"

COPY easymonitor monitor.yml entrypoint.sh /easymonitor/

WORKDIR /easymonitor

CMD ./entrypoint.sh
